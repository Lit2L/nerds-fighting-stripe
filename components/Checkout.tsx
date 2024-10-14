'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/zustand/store'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import { motion } from 'framer-motion'

import { useTheme } from '@/hooks/use-theme'

import CheckoutForm from './CheckoutForm'
import OrderAnimation from './OrderAnimation'

const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
export default function Checkout() {
  // ZUSTAND: CONSUMING THE STORE ⭐️
  const cartStore = useCartStore()
  const themeStore = useTheme()

  // Every payment intent contain a `clientSecret`. The client secret is used by
  // the Stripe SDK to confirm the payment intent. Basically a key unique to the
  // individual/payment that Stripe use to track the state of the intent. On the
  // client side on your application, Stipe uses the `clientSecret` as parameter
  // to invoke specific actions or functions in Stripe. Like confirming payment,
  // confirming order, updating order, etc... We use Zustand to manage the state
  // of the cart and what payment intent stage we are in.
  const [clientSecret, setClientSecret] = useState('')
  const [stripeTheme, setStripeTheme] = useState<
    'flat' | 'stripe' | 'night' | 'none'
  >('stripe')

  const router = useRouter()

  // STRIPE: CREATE OR UPDATE A PAYMENT INTENT FOR THE ORDER ⭐️
  // A payment intent is a object that represent your intent to collect payment.
  // It's typically associated with a single purchase or transaction, which may
  // include a batch of multiple items together. Use a effect to either create a
  // new payment intent or update a existing one when the component mounts. This
  // allows customers to change their minds about an order before they pay. For
  // they can add/remove items from their cart. Keep in mind, that if the total
  // amount changes due to changes in the cart, the `PaymentIntent` will need to
  // be updated. In example the `paymentIntent` is managed in a Zustand store.

  // STRIPE: PAYMENT INTENT VS ORDER ⭐️
  // A single PaymentIntent is typically associated with a single purchase or a
  // transaction, rather than an order. But when building store, a user's order
  // includes multiple items, those usually covered by a single PaymentIntent.
  useEffect(() => {
    // THEME: SET MODE HERE
    if (themeStore.theme === 'dark') setStripeTheme('night')
    if (themeStore.theme === 'light') setStripeTheme('stripe')

    // STRIPE: DEFINE AN API ROUTE ⭐️
    // Here we passing our payment data to this API route.
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // 👇🏻 We send cart items to a route to create or update a payment intent.
      // We `stringify` cart items because a body of fetch requests must be only
      // be a string or `Blob` object. Zustand we `persist` all  store state to
      // localStorage, so that store state is preserved across page loads.
      body: JSON.stringify({
        items: cartStore.cart,
        // This will be used to update a existing PaymentIntent if provided one.
        // If not provided, a new intent will be created with these items.
        payment_intent_id: cartStore.paymentIntent
      })
    })
      .then((res) => {
        // STRIPE: UNAUTHENTICATED USER WILL NAVIGATE TO SIGNIN PAGE ⭐️
        // By using useRouter we can access the query object. If the user is not
        // authenticated, navigate them to the api signin page.
        if (res.status === 403) {
          return router.push('/api/auth/signin')
        }

        return res.json()
      })
      .then((data) => {
        setClientSecret(data.paymentIntent.client_secret)
        cartStore.setPaymentIntent(data.paymentIntent.id)
      })
  }, [])

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'night',
      labels: 'floating'
    }
  }

  return (
    <div>
      {clientSecret && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            delay: 1,
            type: 'spring',
            duration: 0.5
          }}
        >
          <Elements options={options} stripe={promise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        </motion.div>
      )}
      {!clientSecret && <OrderAnimation />}
    </div>
  )
}
