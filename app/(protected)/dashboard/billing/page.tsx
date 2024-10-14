import { redirect } from 'next/navigation'
import { auth } from '@/auth'

import { getCurrentUser } from '@/lib/session'
import { stripe } from '@/lib/stripe'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { constructMetadata } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { DashboardHeader } from '@/components/dashboard/header'
import { BillingInfo } from '@/components/pricing/billing-info'
import { Icons } from '@/components/shared/icons'

export const metadata = constructMetadata({
  title: 'Billing – SaaS Starter',
  description: 'Manage billing and your subscription plan.'
})

export default async function BillingPage() {
  const user = await auth()

  const subscriptionPlan = await getUserSubscriptionPlan(user?.user.id!)

  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false
  if (subscriptionPlan.isPro && subscriptionPlan.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      subscriptionPlan.stripeSubscriptionId
    )
    isCanceled = stripePlan.cancel_at_period_end
  }
  return (
    <>
      <DashboardHeader
        heading='Billing'
        text='Manage billing and your subscription plan.'
      />
      <div className='grid gap-8'>
        <Alert className='!pl-14'>
          <Icons.warning />
          <AlertTitle>This is a demo app.</AlertTitle>
          <AlertDescription className='text-balance'>
            SaaS Starter app is a demo app using a Stripe test environment. You
            can find a list of test card numbers on the{' '}
            <a
              href='https://stripe.com/docs/testing#cards'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-8'
            >
              Stripe docs
            </a>
            .
          </AlertDescription>
        </Alert>
        <BillingInfo
          userSubscriptionPlan={{ ...subscriptionPlan, isCanceled }}
        />
      </div>
    </>
  )
}
