'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'

import { cn } from '@/lib/utils'

interface GradualSpacingProps {
  text: string
  duration?: number
  delayMultiple?: number
  framerProps?: Variants
  className?: string
}

export default function GradualSpacing({
  text,
  duration = 5,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  },
  className
}: GradualSpacingProps) {
  return (
    <div className='flex justify-center space-x-1'>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.h1
            key={i}
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn(
              'text-2xl drop-shadow-sm sm:text-4xl md:text-5xl lg:text-7xl',
              className
            )}
          >
            {char === '' ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  )
}
