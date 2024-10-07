import Image from 'next/image'
import { CiVideoOn } from 'react-icons/ci'
import { FaYinYang } from 'react-icons/fa'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const trainingCards = [
  {
    id: 0,
    title: 'Private Lessons',
    description:
      'Accelerate your skills with Private lessons with Coach Larry. Private lessons are customized to fit your individual needs or goals for yourself.   training type Tailor your training to accelerate your progression towards your goals.',
    info: '30 Min OR 60 Min Sessions',

    image: '/private.jpg',
    icon: <GiWhistle className='size-6 text-gray-500' />,
    href: 'https://calendly.com/nerdsfighting/private-coaching'
  },

  {
    id: 1,
    title: 'Video Analysis',
    description:
      'Accelerate your progress with visual feedback. Our instructors guide you through sessions to pinpoint areas for improvement and deepen your understanding of fight mechanics.',
    info: '30 OR 60 MINS - ALL AGES. ALL LEVELS.',
    image: '/10.jpg',
    icon: <CiVideoOn className='size-6 text-red-700' />,
    href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
  },
  {
    id: 2,
    title: 'Group Training',
    description:
      'Join a supportive community of martial artists. Enjoy daily group sessions that include bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more, all designed to help you reach your peak performance.',
    info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
    image: '/wesdaypose.jpeg',
    icon: <GiYinYang className='size-6 text-black dark:text-white' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 3,
    title: 'Cardio Kickboxing Sessions',
    description:
      'Experience a high-energy, dynamic hour of kickboxing. Perfect for beginners, these sessions boost your fitness and leave you feeling empowered.',
    info: '30 - ALL AGES. BEGINNERS.',
    image: '/groupClass.webp',
    icon: <GiTeacher className='size-6 text-sky-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 4,
    title: 'Outdoor Training',
    description:
      'Train like ancient warriors with our outdoor sessions. Connect with nature, enhance your fitness, and build mental toughness in a challenging and invigorating environment.',
    info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
    image: '/burn.jpeg',
    icon: <PiParkDuotone className='size-6 text-green-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  }
]

export const Training = () => {
  return (
    <section
      id='about'
      className='container relative my-16 min-h-full w-full bg-[radial-gradient(circle_400px_at_50%_375px,#181818,transparent)] font-genos dark:bg-[radial-gradient(circle_350px_at_50%_350px,#14443780,transparent)]'
    >
      <div className='w-full rounded-lg bg-gray-700/20 p-6 py-24 shadow-2xl shadow-gray-900'>
        <div className='flex w-full flex-col items-center justify-center gap-12'>
          {trainingCards.map((card) => (
            <div
              key={card.id}
              className='flex flex-col items-center justify-center'
            >
              {card.id % 2 === 0 ? (
                <div className='flex w-full flex-col items-center justify-center gap-16 bg-transparent md:max-w-2xl md:flex-row'>
                  <div className='flex items-center justify-center md:w-[350px]'>
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={card.image}
                        alt={card.title}
                        className='rounded-lg object-cover'
                        fill
                        // height={350}
                        // width={350}
                      />
                    </AspectRatio>
                  </div>
                  <div className='flex w-[350px] flex-col space-y-6'>
                    <Badge className='md:text-md rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 font-heading text-xs uppercase tracking-wide text-red-900 shadow-lg shadow-red-900 sm:tracking-wide'>
                      {card.info}
                    </Badge>
                    <div className='flex w-full translate-x-6 gap-3'>
                      {card.icon}

                      <h3 className='text-md font-heading'>{card.title}</h3>
                    </div>

                    <p className='ml-6 w-[300px] text-sm font-light leading-6'>
                      {card.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className='flex w-full flex-col-reverse items-center justify-center gap-16 bg-transparent md:max-w-2xl md:flex-row'>
                  <div className='flex w-[350px] flex-col space-y-6'>
                    <Badge className='md:text-md rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 font-heading text-xs uppercase tracking-wide text-emerald-900 shadow-lg shadow-red-900 sm:tracking-wide'>
                      {card.info}
                    </Badge>
                    <div className='ml-6 flex w-full gap-3'>
                      {card.icon}
                      <h3 className='text-md font-heading'>{card.title}</h3>
                    </div>

                    <p className='ml-6 w-[300px] text-sm font-light leading-6'>
                      {card.description}
                    </p>
                  </div>
                  <div className='flex items-center justify-center md:w-[350px]'>
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={card.image}
                        alt={card.title}
                        className='rounded-lg object-cover'
                        height={300}
                        width={350}
                      />
                    </AspectRatio>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
