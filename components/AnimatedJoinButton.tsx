import Link from 'next/link'

import { cn } from '@/lib/utils'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

export async function AnimatedJoinButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='https://calendly.com/spiderbear714/free-trial-class'
        className={cn(
          'group flex h-8 w-48 scale-100 items-center rounded-lg border-2 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 sm:h-10 sm:w-60'
        )}
      >
        <AnimatedShinyText className='inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <span className='mr-4 scale-75 scale-x-[-.7] transition-transform ease-in-out group-hover:translate-x-2 sm:scale-x-[-1]'>
            🥊
          </span>
          <span className='sm:text-md font-heading text-xs capitalize'>
            Start Training
          </span>

          <span className='ml-4 scale-75 transition-transform ease-in-out group-hover:-translate-x-2'>
            🥊
          </span>
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
