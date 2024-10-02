import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'

import Logo from '../Logo'
import { Terminal } from '../terminal'
import { Badge } from '../ui/badge'
import GradualSpacing from '../ui/gradual-spacing'
import RetroGrid from '../ui/retro-grid'

export default async function HeroLanding() {
  return (
    <section
      id='hero'
      className='flex min-h-screen flex-col justify-center space-y-6 bg-[radial-gradient(circle_500px_at_50%_450px,#181818,transparent)]'
    >
      <RetroGrid />
      <div className='container flex h-full w-full max-w-5xl flex-col items-center space-y-12 text-center'>
        <Badge className='md:text-md rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 text-center font-heading text-xs uppercase tracking-wide text-red-900 shadow-lg shadow-red-900 sm:tracking-wide'>
          Kickboxing & Martial Arts Club
        </Badge>
        <GradualSpacing
          className='text-center font-logo font-bold -tracking-widest text-black dark:text-white md:leading-[5rem]'
          text='Nerds Fighting'
        />
        <Logo />
        <div className='my-6 w-full'>
          <Terminal />
        </div>

        <div
          className='mt-3 flex justify-center space-x-2 md:space-x-4'
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
            <span className='font-heading capitalize'>Initiate-Training</span>
            <Icons.arrowRight className='size-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
