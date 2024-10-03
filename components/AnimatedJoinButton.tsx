import Link from 'next/link'

import { cn } from '@/lib/utils'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

export async function AnimatedJoinButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
        className={cn(
          'group flex h-10 w-60 scale-100 items-center rounded-lg border-2 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        )}
      >
        <AnimatedShinyText className='inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <span className='mr-4 scale-x-[-1] transition-transform ease-in-out group-hover:translate-x-2'>
            🥊
          </span>
          <span className='text-md font-heading capitalize'>
            Initiate Training
          </span>

          <span className='ml-4 transition-transform ease-in-out group-hover:-translate-x-2'>
            🥊
          </span>
        </AnimatedShinyText>
      </Link>
    </div>
  )
}