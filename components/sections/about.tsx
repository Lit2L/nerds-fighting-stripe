import Image from 'next/image'
import { CiVideoOn } from 'react-icons/ci'
import { FaYinYang } from 'react-icons/fa'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

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

export const About = () => {
  return (
    <section
      id='about'
      className='container relative my-16 min-h-full w-full bg-[radial-gradient(circle_400px_at_50%_375px,#181818,transparent)] font-genos dark:bg-[radial-gradient(circle_350px_at_50%_350px,#14443780,transparent)]'
    >
      <div className='w-full rounded-lg bg-gray-700/20 p-6 py-24 shadow-2xl shadow-gray-900'>
        <div className='relative flex translate-y-24 flex-col items-center justify-center'>
          <div className='absolute -top-10 z-10 opacity-90'>
            <Image
              src='/temple.png'
              alt='temple'
              width={400}
              height={400}
              className=''
            />
          </div>

          <div className='flex -translate-y-24 flex-col items-center justify-center rounded-full py-20'>
            <h3 className='pt-36 text-center font-heading text-lg'>
              Nerds Fighting
              <FaYinYang className='-z-10 mx-auto my-1 size-12' />
            </h3>
            <p className='text-md text-center font-light text-gray-500'>
              Train for Life
            </p>

            <div className='my-12 h-full max-w-2xl rounded-3xl border border-gray-500/20 bg-zinc-900/70 drop-shadow'>
              <div className='flex flex-col items-center justify-center p-3 text-left'>
                <p className='text-left text-xl font-bold text-white dark:text-white'>
                  Who We Are
                </p>
                <div>
                  <p className='md:text-md p-1 font-genos text-lg leading-8 text-white dark:text-white'>
                    <Separator className='my-6' />
                    <span className='gap-3 font-bold text-emerald-500'>
                      Nerds Fighting
                    </span>{' '}
                    is a Muay Thai and Martial Arts club where we train for
                    health, longevity, and personal growth. Muay Thai is a
                    workout and a practice that will level up your body, your
                    mind and spirit. For others it can also be a journey for
                    your personal growth. We are a community of martial artists
                    who are dedicated to helping you achieve your goals.
                  </p>
                </div>

                <div className=''>
                  <p className='md:text-md p-1 font-genos text-lg leading-8 text-white dark:text-white'>
                    We specialize in training newbies and newcomers. Join us for
                    a free class to see if we&apos;re a good fit for you. You
                    have nothing to lose and everything to gain!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
