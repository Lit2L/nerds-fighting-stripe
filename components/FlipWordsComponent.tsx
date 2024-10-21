import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    'Technique',
    'Cardio',
    'Fight-IQ',
    'Cardio',
    'Defense',
    'Confidence'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 px-4 pt-6'>
      <div className='mx-auto w-full text-center font-heading text-2xl tracking-tight text-emerald-950 dark:text-white sm:text-3xl'>
        Click to Continue...
      </div>

      <div className='mx-auto flex w-96 items-center justify-center'>
        <p className='text-center font-heading text-2xl font-semibold text-green-600 dark:text-emerald-500'>
          +++
        </p>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
// Create a landing page for a kickboxing club named 'Nerds Fighting' that includes hero section, navbar, about us,  gallery showcase section with image cards with info include a hover with animation background change action your audience are the middleclass to upperclass healthy lifestyle individuals, nerds, martial artists, fighters, professionals, women. Also include a mantra that promotes our values behind our philosophy that includes the following values:(values are still currently vagely defined, so you can make up your own values that you think would be good for a kickboxing club)
// 1. Health: Brain Cognitive function, Physical Health, Emotional Stability
// 2. Learning; High Fight IQ
// 3. Combing Mind & Body through application of techniques and strategies

// and style of training that include an approach to our training style that maximizes effectiveness, utilize your body optimally  and learning , including an explanation of what it is, how it works, and a value proposition. Include 2 analogies to help explain it to someone new to this concept.
