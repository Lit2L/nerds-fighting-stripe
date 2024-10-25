'use client'

import { AnimatedBookitButton } from '../animated-bookit-button'
import { AnimatedJoinButton } from '../AnimatedJoinButton'
import { FlipWordsComponent } from '../FlipWordsComponent'
import Logo from '../Logo'
import { Badge } from '../ui/badge'
import GradualSpacing from '../ui/gradual-spacing'
import RetroGrid from '../ui/retro-grid'

export default function HeroLanding() {
  return (
    <section
      id='hero'
      className='mx-auto h-screen w-full bg-[radial-gradient(circle_500px_at_50%_500px,#b2b2b2,transparent)] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl'
    >
      <RetroGrid />
      <div className='container flex h-full w-full flex-col items-center justify-center space-y-9 text-center sm:max-w-3xl md:max-w-4xl md:space-y-16 lg:max-w-5xl xl:max-w-7xl'>
        <Badge className='md:text-md -translate-y-3 rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 text-center font-heading text-[9px] uppercase tracking-wide text-red-900 shadow-lg shadow-red-900 sm:tracking-wide md:text-xs'>
          Kickboxing & Martial Arts Club
        </Badge>
        <GradualSpacing
          className='text-center font-logo font-bold -tracking-widest text-black dark:text-white md:leading-[5rem]'
          text='Nerds Fighting'
        />
        <div className='h-32 w-48 sm:h-60 sm:w-72'>
          <Logo />
          {/* <span className='text-xl text-black'>Train For Life</span> */}
          <div className='md:text-md mx-auto w-full text-center font-heading text-xs tracking-tight text-emerald-950 dark:text-white'>
            Fight like a <span className='text-xs text-red-500'> Nerd</span>
          </div>
          {/* <span className='text-xl text-dark-100 dark:text-dark-200'> */}
          {/* Gear Up! */}
          {/* Study the Game <br /> */}
          {/* Nerd Out <br /> */}
          {/* "Forge the Path" <br /> */}
          {/* Live Fearless */}
          {/* </span> */}
        </div>

        {/* <Terminal /> */}
        <FlipWordsComponent />

        <div
          className='flex translate-y-6 justify-center space-x-3 md:translate-y-3 md:space-x-4 lg:translate-y-0'
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <AnimatedJoinButton />
          <AnimatedBookitButton />
        </div>
      </div>
    </section>
  )
}
