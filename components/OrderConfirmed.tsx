'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import orderCompleted from '@/public/orderCompleted.json'
import payment from '@/public/payment_mail.gif'
import { useCartStore } from '@/zustand/store'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'

export default function OrderConfirmed() {
  const cartStore = useCartStore()

  useEffect(() => {
    cartStore.setPaymentIntent('')
    cartStore.clearCart()
  }, [])

  const handleCheckout = () => {
    setTimeout(() => {
      cartStore.setCheckout('cart')
    }, 1000)
    cartStore.toggleCart()
  }

  return (
    <motion.div
      className='my-12 flex flex-col items-center justify-center'
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className='rounded-b-md p-8 text-center'>
        <h1 className='text-xl font-medium'>Your order has been confirmed</h1>
        <h2 className='my-4 text-sm'>Check your email for the receipt</h2>
        {/* <Image
          src={payment}
          alt="payment"
          width={120}
          height={120}
          className="w-full py-8"
        /> */}
        <Player
          autoplay
          loop={false}
          keepLastFrame
          src={orderCompleted}
          style={{ height: '400px', width: '400px' }}
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-6'>
        <Link href='/dashboard'>
          <button
            onClick={() => {
              setTimeout(() => {
                handleCheckout()
              }, 1000)
            }}
            className='btn btn-primary my-4'
          >
            Check your Order
          </button>
        </Link>
      </div>
    </motion.div>
  )
}
