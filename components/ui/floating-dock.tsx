'use client'

/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
import { useRef, useState } from 'react'
import Link from 'next/link'
import { IconLayoutNavbarCollapse } from '@tabler/icons-react'
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion'

import { cn } from '@/lib/utils'

import { ModeToggle } from './mode-toggle'

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  desktopClassName?: string
  mobileClassName?: string
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      {/* <FloatingDockMobile items={items} className={mobileClassName} /> */}
    </>
  )
}

const FloatingDockMobile = ({
  items,
  className
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={cn('relative block', className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId='nav'
            className='absolute inset-x-0 bottom-full z-10 mb-2 flex flex-col gap-2'
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05
                  }
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className='z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-900'
                >
                  <div className='h-4 w-4'>{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <ModeToggle />
      <button
        onClick={() => setOpen(!open)}
        className='flex h-6 w-6 items-center justify-center rounded-full border-white bg-dark-900 dark:bg-neutral-800'
      >
        <IconLayoutNavbarCollapse className='h-5 w-5 text-neutral-500 dark:text-neutral-400' />
      </button>
    </div>
  )
}

const FloatingDockDesktop = ({
  items,
  className
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  let mouseX = useMotionValue(Infinity)
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'mx-auto flex h-16 items-end gap-3 rounded-2xl bg-neutral-400/70 p-3 font-bold uppercase dark:bg-neutral-900',
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href
}: {
  mouseX: MotionValue
  title: string
  icon: React.ReactNode
  href: string
}) {
  let ref = useRef<HTMLDivElement>(null)

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  })
  let height = useSpring(heightTransform, {
    mass: 0,
    stiffness: 150,
    damping: 12
  })

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  })
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  })

  const [hovered, setHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='relative flex aspect-square items-center justify-center rounded-full bg-neutral-900/70 shadow-lg shadow-gray-800 dark:bg-neutral-800'
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className='absolute -top-8 left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-md border-gray-200 bg-dark-900 px-2 py-0.5 text-xs text-white dark:border-neutral-900 dark:bg-neutral-300 dark:text-black'
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className='flex items-center justify-center'
        >
          {icon}
        </motion.div>
        <motion.div
          style={{ width: width, height: height }}
          className='absolute left-0 w-12 translate-y-10 hover:hidden'
        >
          <p className='mx-auto flex w-9 items-center justify-center text-center text-[7px] font-bold leading-tight text-white opacity-70'>
            {title}
          </p>
        </motion.div>
      </motion.div>
    </Link>
  )
}
