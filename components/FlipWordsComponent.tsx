import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Program-Updating...',
    'Debug-Limits.exe',
    'Upgrade-body.push',
    'Hack-Mental-Strength.exe',
    'Optimize.Confidence.lvl'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 px-4 pt-6'>
      <div className='mx-auto w-full text-center font-heading text-3xl font-bold tracking-tight text-emerald-950 dark:text-white'>
        Run start...
      </div>
      <div className=''>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
