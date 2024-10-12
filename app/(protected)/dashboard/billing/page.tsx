import React from 'react'
import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'
import { stripe } from '@/lib/stripe'
import { getUserSubscriptionPlan } from '@/lib/subscriptions'
import { constructMetadata } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { DashboardHeader } from '@/components/dashboard/header'
import { BillingForm } from '@/components/forms/billing-form'
import { BillingInfo } from '@/components/pricing/billing-info'
import { Icons } from '@/components/shared/icons'

export const metadata = constructMetadata({
  title: 'Billing - Nerds Fighting',
  description: 'Manage billing and your subscription plan.'
})

export default async function BillingPage() {
  const user = await getCurrentUser()

  // if (!user && user.id && user.role === 'USER') {
  if (!user && user.id && user.role === 'USER') {
    redirect('/login')
  }
  const subscriptionPlan = await getUserSubscriptionPlan(user.id)
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
          <AlertTitle>Payments are in Test Mode</AlertTitle>
          <AlertDescription className='text-balance'>
            Nerds-Fighting app is using a Stripe test environment.
          </AlertDescription>
        </Alert>
        <BillingForm
          subscriptionPlan={{
            ...subscriptionPlan,
            isCanceled
          }}
        />
      </div>
    </>
  )
}
