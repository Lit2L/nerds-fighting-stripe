'use client'

import * as React from 'react'
import Link from 'next/link'

import { UserSubscriptionPlan } from 'types'
import { cn, formatDate } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { CustomerPortalButton } from '@/components/forms/customer-portal-button'

import { Icons } from '../icons'

interface BillingInfoProps extends React.HTMLAttributes<HTMLFormElement> {
  userSubscriptionPlan: UserSubscriptionPlan
}

export function BillingInfo({ userSubscriptionPlan }: BillingInfoProps) {
  const {
    description,
    stripeCustomerId,
    name,
    isPaid,
    isCanceled,
    stripeCurrentPeriodEnd
  } = userSubscriptionPlan
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Plan</CardTitle>
        <CardDescription>
          You are currently on the <strong>{userSubscriptionPlan.name}</strong>{' '}
          plan.
        </CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className='flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0'>
        <button
          type='submit'
          className={cn(buttonVariants())}
          disabled={isLoading}
        >
          {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
          {userSubscriptionPlan.isPro
            ? 'Manage Subscription'
            : 'Upgrade to PRO'}
        </button>
        {userSubscriptionPlan.isPro ? (
          <p className='rounded-full text-xs font-medium'>
            {userSubscriptionPlan.isCanceled
              ? 'Your plan will be canceled on '
              : 'Your plan renews on '}
            {formatDate(userSubscriptionPlan.stripeCurrentPeriodEnd)}.
          </p>
        ) : null}
      </CardFooter>
    </Card>
  )
}
