import { PlansRow, SubscriptionPlan } from 'types'
import { env } from '@/env.mjs'

export const pricingData: SubscriptionPlan[] = [
  {
    title: 'Trial Class(Free)',
    description: 'Free Trial Class',
    benefits: [
      'Claim One Free Class',
      'Try class before joining without any risk',
      'No pressure to join'
    ],
    limitations: [
      'No custom branding',
      'Limited access to business resources.'
    ],
    prices: {
      monthly: 0,
      yearly: 0
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID
    }
  },
  {
    title: 'Drop-in Class',
    description: 'Allows for one drop-in Muay Thai class.',
    benefits: [
      'Access to one Muay Thai Class',
      'Cardio and Strength Conditioning',
      'Technique and Sparring drills',
      'Bag and Pad work',
      'Fitness and Weight Loss'
    ],
    limitations: [],
    prices: {
      monthly: 25,
      yearly: 25
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID
    }
  },
  {
    title: 'Pro',
    description: 'Get access to join in all Muay Thai classes.',
    benefits: [
      'Access to all Muay Thai Classes',
      'Cardio and Strength Conditioning',
      'Technique and Sparring drills',
      'Bag and Pad work',
      'Fitness and Weight Loss'
    ],
    limitations: [
      'No priority access to new features.',
      'Limited customer support',
      'No custom branding',
      'Limited access to business resources.'
    ],
    prices: {
      monthly: 100,
      yearly: 1200
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID
    }
  }
]

export const plansColumns = [
  'starter',
  'pro',
  'business',
  'enterprise'
] as const

export const comparePlans: PlansRow[] = [
  {
    feature: 'Access to Analytics',
    starter: true,
    pro: true,
    business: true,
    enterprise: 'Custom',
    tooltip: 'All plans include basic analytics for tracking performance.'
  },
  {
    feature: 'Custom Branding',
    starter: null,
    pro: '500/mo',
    business: '1,500/mo',
    enterprise: 'Unlimited',
    tooltip: 'Custom branding is available from the Pro plan onwards.'
  },
  {
    feature: 'Priority Support',
    starter: null,
    pro: 'Email',
    business: 'Email & Chat',
    enterprise: '24/7 Support'
  },
  {
    feature: 'Advanced Reporting',
    starter: null,
    pro: null,
    business: true,
    enterprise: 'Custom',
    tooltip: 'Advanced reporting is available in Business and Enterprise plans.'
  },
  {
    feature: 'Dedicated Manager',
    starter: null,
    pro: null,
    business: null,
    enterprise: true,
    tooltip: 'Enterprise plan includes a dedicated account manager.'
  },
  {
    feature: 'API Access',
    starter: 'Limited',
    pro: 'Standard',
    business: 'Enhanced',
    enterprise: 'Full'
  },
  {
    feature: 'Monthly Webinars',
    starter: false,
    pro: true,
    business: true,
    enterprise: 'Custom',
    tooltip: 'Pro and higher plans include access to monthly webinars.'
  },
  {
    feature: 'Custom Integrations',
    starter: false,
    pro: false,
    business: 'Available',
    enterprise: 'Available',
    tooltip:
      'Custom integrations are available in Business and Enterprise plans.'
  },
  {
    feature: 'Roles and Permissions',
    starter: null,
    pro: 'Basic',
    business: 'Advanced',
    enterprise: 'Advanced',
    tooltip: 'User roles and permissions management improves with higher plans.'
  },
  {
    feature: 'Onboarding Assistance',
    starter: false,
    pro: 'Self-service',
    business: 'Assisted',
    enterprise: 'Full Service',
    tooltip: 'Higher plans include more comprehensive onboarding assistance.'
  }
  // Add more rows as needed
]
