import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Chill & Safe Environment',
    'No-Egos & No Meatheads',
    'Learn Technique',
    'Get Stronger',
    'Improve Cardio & Conditioning',
    'Defend Yourself Against Bullies',
    'Increase Fight-IQ & Strategy',
    'Level Up Confidence Level'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 px-4'>
      <div className='mx-auto flex w-96 items-center justify-center'>
        <p className='text-center font-heading font-semibold text-emerald-600 dark:text-emerald-500'>
          +++
        </p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
