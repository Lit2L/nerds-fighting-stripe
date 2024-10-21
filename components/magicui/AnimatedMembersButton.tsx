import Link from 'next/link'
import { CalendarHeart, Pencil } from 'lucide-react'

import { cn } from '@/lib/utils'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'

export function AnimatedMembersButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='https://calendly.com/nerdsfighting/private-coaching'
        className={cn(
          'group w-60 scale-100 rounded-lg border-2 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        )}
      >
        <AnimatedShinyText className='flex items-center justify-center px-3 py-1 font-heading transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <CalendarHeart className='mr-2 size-5 scale-x-[-.9] text-blue-300 transition-transform ease-in-out group-hover:translate-x-2' />
          <span className='text-md font-semibold capitalize tracking-tighter'>
            Book Session
          </span>

          <Pencil className='ml-3 size-4 text-yellow-600 transition-transform ease-in-out group-hover:-translate-x-2' />
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
