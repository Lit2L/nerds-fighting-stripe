import Image from 'next/image'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2
} from '@tabler/icons-react'
import { GalleryThumbnails, SquareUser, TrophyIcon } from 'lucide-react'
import { BsCalendar3 } from 'react-icons/bs'
import { FaSchool } from 'react-icons/fa6'
import { GrScheduleNew } from 'react-icons/gr'
import { MdSportsMartialArts } from 'react-icons/md'
import { PiReadCvLogoFill } from 'react-icons/pi'

import { FloatingDock } from '@/components/ui/floating-dock'

import { ModeToggle } from './ui/mode-toggle'

export function FloatingNavDock() {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className='h-full w-full text-dark-100 dark:text-neutral-300' />
      ),
      href: '/#'
    },
    {
      title: 'About',
      icon: (
        <SquareUser className='h-full w-full text-dark-100 dark:text-neutral-300' />
      ),
      href: '/#about'
    },
    {
      title: 'Training',
      icon: (
        <MdSportsMartialArts className='h-full w-full text-dark-100 dark:text-neutral-300' />
      ),
      href: '/#training'
    },
    {
      title: 'Schedule',
      icon: (
        <BsCalendar3 className='h-full w-full text-dark-100 dark:text-neutral-300' />
      ),
      href: '/#schedule'
    },
    {
      title: 'Appointment',
      icon: (
        <GrScheduleNew className='h-full w-full text-dark-100 dark:text-neutral-300' />
      ),
      href: '/#book'
    },

    {
      title: 'Location',
      icon: (
        <FaSchool className='h-full w-full text-dark-100 dark:text-neutral-300' />
      ),
      href: 'https://www.williamsmma.com/contact.html'
    },

    {
      title: 'Dark',
      icon: <ModeToggle />,
      href: '#'
    }
  ]
  return (
    <div className='fixed bottom-12 flex h-[2rem] w-full items-center justify-center'>
      <FloatingDock
        mobileClassName='translate-y-12 z-40' // only for demo, remove for production
        items={links}
      />
    </div>
  )
}
