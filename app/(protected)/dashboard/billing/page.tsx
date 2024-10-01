import React from 'react'
import { redirect } from 'next/navigation'

import { getCurrentUser } from '@/lib/session'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { constructMetadata } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { DashboardHeader } from '@/components/dashboard/header'
import { BillingInfo } from '@/components/pricing/billing-info'
import { Icons } from '@/components/shared/icons'

export const metadata = constructMetadata({
  title: 'Billing - Nerds Fighting',
  description: 'Manage billing and your subscription plan.'
})

export default async function BillingPage() {
  const user = await getCurrentUser()

  let userSubscriptionPlan
  if (user && user.id && user.role === 'USER') {
    userSubscriptionPlan = await getUserSubscriptionPlan(user.id)
  } else {
    redirect('/login')
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
        <BillingInfo userSubscriptionPlan={userSubscriptionPlan} />
      </div>
    </>
  )
}
