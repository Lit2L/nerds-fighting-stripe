import Link from 'next/link'

import { env } from '@/env.mjs'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'

import { Badge } from '../ui/badge'

export default async function HeroLanding() {
  return (
    <section className='space-y-6 py-12 sm:py-20 lg:py-20'>
      <div className='container flex max-w-5xl flex-col items-center gap-5 text-center'>
        <Badge className='md:text-md rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 font-heading text-xs uppercase tracking-wide text-red-900 shadow-lg shadow-red-900 sm:tracking-wide'>
          Kickboxing & Martial Arts Club
        </Badge>

        <h1 className='text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]'>
          Kick off with a bang with{' '}
          <span className='text-gradient_indigo-purple font-extrabold'>
            SaaS Starter
          </span>
        </h1>

        <p
          className='max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8'
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          Build your next project using Next.js 14, Prisma, Neon, Auth.js v5,
          Resend, React Email, Shadcn/ui, Stripe.
        </p>

        <div
          className='flex justify-center space-x-2 md:space-x-4'
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <Link
            href='/pricing'
            prefetch={true}
            className={cn(
              buttonVariants({ size: 'lg', rounded: 'full' }),
              'gap-2'
            )}
          >
            <span>Go Pricing</span>
            <Icons.arrowRight className='size-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
