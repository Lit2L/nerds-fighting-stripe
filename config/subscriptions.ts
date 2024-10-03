import { PlansRow, SubscriptionPlan } from 'types'

export const pricingData: SubscriptionPlan[] = [
  {
    title: 'Trial Class(Free)',
    description: 'Free Trial Class',
    benefits: [
      'One Invite to Free Trial Class',
      'No commitment required',
      'No pressure to join',
      'Invite a friend and receive one week of membership free'
    ],
    limitations: [],
    prices: {
      single: 0,
      monthly: 0,
      yearly: 0
    },
    stripeIds: {
      single: process.env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID!,
      monthly: process.env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID!,
      yearly: process.env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID!
    }
  },
  {
    title: 'Drop-ins',
    description: 'Purchase one drop-in or select a package of classes.',
    benefits: [
      'Purchase One drop-in Class or a Package',
      'Use anytime',
      'Convenient for those who can only attend occasionally',
      'No commitment required'
    ],
    limitations: [],
    prices: {
      single: 25,
      monthly: 100,
      yearly: 0
    },
    stripeIds: {
      single: process.env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID!,
      monthly: process.env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID!,
      yearly: process.env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID!
    }
  },
  {
    title: 'Pro',
    description: 'All members get access to all scheduled Muay thai classes. ',
    benefits: [
      'Access to all Muay Thai Classes',
      'Cardio and Strength Conditioning',
      'Technique and Sparring drills',
      'Bag and Pad work',
      'Fitness and Weight Loss'
    ],
    limitations: [],
    prices: {
      single: 25,
      monthly: 100,
      yearly: 1200
    },
    stripeIds: {
      single: process.env.NEXT_PUBLIC_STRIPE_SINGLE_CLASS_PLAN_ID!,
      monthly: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID!,
      yearly: process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID!
    }
  }
]

export const plansColumns = ['Pro', 'Single', 'Free'] as const

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
