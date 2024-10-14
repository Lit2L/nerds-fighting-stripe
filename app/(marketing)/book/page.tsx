import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { CalendlyWidget } from '@/components/calendly/calendly-widget'
import { Icons } from '@/components/icons'

export const metadata = {
  title: 'Pricing'
}

export default function BookingPage() {
  return (
    <section className='container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24'>
      <div className='mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Simple & transparent
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Unlock all features including scheduling and class updates.
        </p>
      </div>
      <CalendlyWidget />
      <div className='mx-auto flex w-full max-w-[58rem] flex-col gap-4'>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:leading-7'>
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  )
}
