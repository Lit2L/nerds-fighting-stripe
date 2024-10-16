import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'

import { AnimatedJoinButton } from '../AnimatedJoinButton'
import { AnimatedMembersButton } from '../AnimatedMembersButton'
import { FlipWordsComponent } from '../FlipWordsComponent'
import Logo from '../Logo'
import { Badge } from '../ui/badge'
import GradualSpacing from '../ui/gradual-spacing'
import RetroGrid from '../ui/retro-grid'

export default async function HeroLanding() {
  return (
    <section
      id='hero'
      className='mx-auto flex min-h-screen w-full flex-col items-center justify-center space-y-6 bg-[radial-gradient(circle_500px_at_50%_500px,#181818,transparent)] py-12 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'
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
        <div className='h-54 w-72'>
          <Logo />
          <span className='text-xl text-black'>Train For Life</span>
        </div>
        <div className='w-full max-w-3xl rounded-sm p-3'>
          {/* <Terminal /> */}
          <FlipWordsComponent />
        </div>

        <div
          className='flex justify-center space-x-2 md:space-x-4'
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <AnimatedJoinButton />
          <AnimatedMembersButton />
        </div>
      </div>
    </section>
  )
}
