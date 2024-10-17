import React from 'react'

import { FlipWords } from './flip-words'

export function FlipWordsComponent() {
  const words = [
    'Upgrade-Body.exe',
    'Debug-Your-Limits.exe',
    'Optimize.Strength.',
    'Program-Updating...'
  ]

  return (
    <div className='flex w-full items-center justify-center px-4'>
      <div className='mx-auto w-full text-center font-heading text-3xl font-bold tracking-tight text-white'>
        <p className='my-6'>Run start...</p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
