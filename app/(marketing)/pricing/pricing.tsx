'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import styles from './pricing.module.css'

export interface PricingTierFrequency {
  id: string
  value: string
  label: string
  priceSuffix: string
}

export interface PricingTier {
  name: string
  id: string
  href: string
  discountPrice: string | Record<string, string>
  price: string | Record<string, string>
  description: string | React.ReactNode
  features: string[]
  featured?: boolean
  highlighted?: boolean
  cta: string
  soldOut?: boolean
}

export const frequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: 'Members', priceSuffix: '/month' },
  { id: '2', value: '2', label: 'Visitors', priceSuffix: '/day' }
]

export const tiers: PricingTier[] = [
  {
    name: 'Nerds Fighting',
    id: '0',
    href: '/subscribe',
    price: { '1': '$125', '2': '$30', '3': '$0' },
    discountPrice: { '1': '$100', '2': '$25', '3': '4 Pack' },
    description: `Join Today and start your  Muay Thai training journey with your new  Nerds Fighting Team!`,
    features: [
      `Unlimited Classes Per Month`,
      `Practice the Art of Thai Boxing`,
      `Strength & Conditioning`,
      `Heavy Bag `
    ],
    featured: false,
    highlighted: true,
    soldOut: false,
    cta: `Join Now!`
  },
  {
    name: 'Drop-In Classes',
    id: '1',
    href: '/subscribe',
    price: { '1': '$25', '2': '10', '3': '' },
    discountPrice: { '1': '', '2': '', '3': '' },
    description: `Membership Purchase Drop-Ins per Class`,
    features: [`Purchase Classes Individually`, `Customizable templates`, ``],
    featured: true,
    highlighted: true,
    soldOut: false,
    cta: `One Drop-in `
  }
]

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={cn('h-6 w-6', className)}
    >
      <path
        fillRule='evenodd'
        d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function PricingTiers() {
  const [frequency, setFrequency] = useState(frequencies[0])

  const bannerText =
    'For a limited time new members save 25% off monthly membership!'

  return (
    <div
      className={cn('flex w-full flex-col items-center', styles.fancyOverlay)}
    >
      <div className='flex w-full flex-col items-center'>
        <div className='mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8'>
          <div className='mx-auto w-full max-w-4xl lg:w-auto lg:text-center'>
            <h1 className='max-w-xs text-4xl font-semibold !leading-tight text-black dark:text-white sm:max-w-none md:text-6xl'>
              Pricing
            </h1>
            {/* <p className='mt-0 max-w-prose text-black dark:text-white md:text-xl lg:text-center'>
              Join today and recieve a 25% discount on your first month of
              training!
            </p> */}
          </div>

          {bannerText ? (
            <div className='my-6 flex w-full justify-center lg:w-auto'>
              <p className='w-full rounded-xl bg-lime-100 px-4 py-3 text-xs text-black dark:bg-lime-300/30 dark:text-white/80'>
                {bannerText}
              </p>
            </div>
          ) : null}

          {frequencies.length > 1 ? (
            <div className='mt-6 flex justify-center'>
              <RadioGroup
                defaultValue={frequency.value}
                onValueChange={(value: string) => {
                  setFrequency(frequencies.find((f) => f.value === value)!)
                }}
                className='grid gap-x-1 rounded-full bg-white p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200/30 dark:bg-black dark:ring-gray-800'
                style={{
                  gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`
                }}
              >
                <Label className='sr-only'>Payment frequency</Label>
                {frequencies.map((option) => (
                  <Label
                    className={cn(
                      frequency.value === option.value
                        ? 'bg-lime-500/90 text-white dark:bg-lime-900/70 dark:text-white/70'
                        : 'bg-transparent text-gray-500 hover:bg-lime-500/10',
                      'cursor-pointer rounded-full px-2.5 py-2 transition-all'
                    )}
                    key={option.value}
                    htmlFor={option.value}
                  >
                    {option.label}

                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className='hidden'
                    />
                  </Label>
                ))}
              </RadioGroup>
            </div>
          ) : (
            <div className='mt-12' aria-hidden='true'></div>
          )}

          <div
            className={cn(
              'isolate mx-auto mb-28 mt-4 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none',
              tiers.length === 2 ? 'lg:grid-cols-2' : '',
              tiers.length === 3 ? 'lg:grid-cols-3' : ''
            )}
          >
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  tier.featured
                    ? '!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100'
                    : 'bg-white ring-gray-300/70 dark:bg-gray-900/80 dark:ring-gray-700',
                  'max-w-xs rounded-3xl p-8 ring-1 xl:p-10',
                  tier.highlighted ? styles.fancyGlassContrast : ''
                )}
              >
                <h3
                  id={tier.id}
                  className={cn(
                    tier.featured
                      ? 'text-white dark:text-black'
                      : 'text-black dark:text-white',
                    'text-2xl font-bold tracking-tight'
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    tier.featured
                      ? 'text-gray-300 dark:text-gray-500'
                      : 'text-gray-600 dark:text-gray-400',
                    'mt-4 text-sm leading-6'
                  )}
                >
                  {tier.description}
                </p>
                <p className='mt-6 flex items-baseline gap-x-1'>
                  <span
                    className={cn(
                      tier.featured
                        ? 'text-white dark:text-black'
                        : 'text-black dark:text-white',
                      'text-4xl font-bold tracking-tight',
                      tier.discountPrice && tier.discountPrice[frequency.value]
                        ? 'line-through'
                        : ''
                    )}
                  >
                    {typeof tier.price === 'string'
                      ? tier.price
                      : tier.price[frequency.value]}
                  </span>

                  <span
                    className={cn(
                      tier.featured
                        ? 'text-white dark:text-black'
                        : 'text-black dark:text-white'
                    )}
                  >
                    {typeof tier.discountPrice === 'string'
                      ? tier.discountPrice
                      : tier.discountPrice[frequency.value]}
                  </span>

                  {typeof tier.price !== 'string' ? (
                    <span
                      className={cn(
                        tier.featured
                          ? 'text-gray-300 dark:text-gray-500'
                          : 'text-gray-600 dark:text-gray-400',
                        'text-sm font-semibold leading-6'
                      )}
                    >
                      {frequency.priceSuffix}
                    </span>
                  ) : null}
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={cn(
                    'mt-6 flex shadow-sm',
                    tier.soldOut ? 'pointer-events-none' : ''
                  )}
                >
                  <Button
                    size='lg'
                    disabled={tier.soldOut}
                    className={cn(
                      'w-full text-black dark:text-white',
                      !tier.highlighted && !tier.featured
                        ? 'bg-gray-100 dark:bg-gray-600'
                        : 'bg-lime-300 hover:bg-lime-400 dark:bg-lime-600 dark:hover:bg-lime-700',
                      tier.featured || tier.soldOut
                        ? 'bg-white hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-black'
                        : 'transition-opacity hover:opacity-80'
                    )}
                    variant={tier.highlighted ? 'default' : 'outline'}
                  >
                    {tier.soldOut ? 'Sold out' : tier.cta}
                  </Button>
                </a>

                <ul
                  className={cn(
                    tier.featured
                      ? 'text-gray-300 dark:text-gray-500'
                      : 'text-gray-700 dark:text-gray-400',
                    'mt-8 space-y-3 text-sm leading-6 xl:mt-10'
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className='flex gap-x-3'>
                      <CheckIcon
                        className={cn(
                          tier.featured ? 'text-white dark:text-black' : '',
                          tier.highlighted ? 'text-lime-500' : 'text-gray-500',

                          'h-6 w-5 flex-none'
                        )}
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
