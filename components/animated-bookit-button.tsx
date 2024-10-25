import Link from 'next/link'
import { CalendarHeart, Pencil } from 'lucide-react'

import { cn } from '@/lib/utils'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'

export function AnimatedBookitButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='/booking'
        className={cn(
          'group flex h-8 w-40 scale-100 items-center rounded-lg border-2 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 sm:h-9 sm:w-48'
        )}
      >
        <AnimatedShinyText className='flex items-center justify-center px-3 py-0.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <CalendarHeart className='mr-3 size-3 scale-x-[-.9] text-blue-300 transition-transform ease-in-out group-hover:translate-x-2 sm:size-4' />
          <span className='font-heading text-[10px] md:text-xs'>
            Book Private
          </span>

          <Pencil className='ml-4 size-3 text-yellow-600 transition-transform ease-in-out group-hover:-translate-x-2 sm:size-4' />
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
