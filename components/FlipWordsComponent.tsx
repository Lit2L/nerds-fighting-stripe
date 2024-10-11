import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = ['Limits', 'Fitness', 'Technique', 'Mindset ']

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 px-4 pt-6'>
      <div className='mx-auto w-full text-center font-heading text-3xl font-bold tracking-tight text-emerald-950 dark:text-white'>
        Game Reset...
      </div>

      <div className='mx-auto flex w-96 items-center justify-center'>
        <p className='text-center font-heading text-2xl font-semibold text-emerald-900 dark:text-emerald-500'>
          Upgrade
        </p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
