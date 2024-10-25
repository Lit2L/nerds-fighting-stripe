import Image from 'next/image'
import Link from 'next/link'
import { Brain, Dumbbell, Menu, Shield, Swords } from 'lucide-react'
import { CiVideoOn } from 'react-icons/ci'
import { FaYinYang } from 'react-icons/fa'
import { GiBoxingGlove, GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import AnimatedGradientText from '../ui/animated-gradient-text'

const trainingCards = [
  {
    id: 0,
    title: 'Private Lessons',
    description:
      'Accelerate your skills with Private lessons with Coach Larry. Private lessons are customized to fit your individual needs or goals for yourself.   training type Tailor your training to accelerate your progression towards your goals.',
    info: '30 Min OR 60 Min Sessions',

    image: '/private.jpg',
    icon: <GiWhistle className='size-6 text-dark-100' />,
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
      <div className='w-full rounded-lg bg-dark-100/20 p-6 py-24 shadow-2xl shadow-dark-100'>
        <div className='relative flex translate-y-24 flex-col items-center justify-center'>
          <div className='absolute -top-10 z-10 opacity-90'>
            <Image
              src='/wesdaypose.jpeg'
              alt='temple'
              width={400}
              height={400}
              className='opacity-20'
            />
          </div>

          <div className='flex -translate-y-24 flex-col items-center justify-center rounded-full py-20'>
            <h3 className='pt-36 text-center font-heading text-lg text-white'>
              Nerds Fighting
              <FaYinYang className='-z-10 mx-auto my-1 size-12' />
            </h3>
            <p className='text-md text-center font-light text-dark-100 dark:text-dark-100'>
              Train for Life
            </p>

            <div className='my-12 h-full max-w-2xl rounded-3xl border border-dark-100/20 bg-neutral-500/70 drop-shadow'>
              <div className='flex w-full flex-col items-center justify-center p-6 text-left'>
                <strong className='md:text-md p-1 text-left font-genos text-lg leading-8 text-white dark:text-white'>
                  We Are {/* <span className=''>Kickboxing Club</span> */}
                </strong>
                <AnimatedGradientText text='Nerds Fighting' />
                <p className='my-6'>
                  {/* <span className='gap-3 px-2 font-logo text-2xl font-bold tracking-tighter text-emerald-400'>
                    Nerds Fighting
                  </span>{' '} */}
                  At Nerds Fighting, we believe that kickboxing is more than
                  just a physical skill - it&apos;s a way to unlock focus,
                  precision, and self mastery. Every session brings you closer
                  to that perfect flow state where mind and body unite,
                  distractions disappear, and you are fully present in the
                  rhythm of each strike, defense, and movement.
                  <br />
                  Our gym is a place where people of all backgrounds come
                  together to discover their own path to strength and
                  resilience. Here, your&apos;re not just training, your&apos;re
                  stepping into a club that supports you, challenges you and
                  empowers you to be your best self.
                  <br />
                </p>
              </div>
            </div>
          </div>

          {/* <p className='mt-6 max-w-[700px] text-dark-100 md:text-xl'>
                  Whether you're a beginner looking to get fit or an experienced
                  fighter aiming to refine your skills, our programs are
                  designed to challenge your body and mind, helping you achieve
                  your full potential.
                </p> */}

          {/* <div id='services' className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
              <h2 className='text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                We Teach
              </h2>
              <div className='flex flex-col items-center text-center'>
                <GiBoxingGlove className='mb-4 h-12 w-12' />
                <h3 className='text-2xl font-bold'>KickBoxing</h3>
                <p className='mt-2 text-dark-100'>
                  Master the sweet science of boxing. Improve your footwork,
                  develop devastating combinations, and enhance your defensive
                  skills.
                </p>
              </div>
              <div className='mt-8 grid gap-8 md:grid-cols-2'>
                <div className='flex flex-col items-center text-center'>
                  <Swords className='mb-4 h-12 w-12' />
                  <h3 className='text-2xl font-bold'>Muay Thai</h3>
                  <p className='mt-2 text-dark-100'>
                    Learn the art of eight limbs with our expert Muay Thai
                    coaches. Develop striking skills, clinch work, and build
                    unparalleled conditioning.
                  </p>
                </div>
                <div className='flex flex-col items-center text-center'>
                  <GiBoxingGlove className='mb-4 h-12 w-12' />
                  <h3 className='text-2xl font-bold'>Boxing</h3>
                  <p className='mt-2 text-dark-100'>
                    Master the sweet science of boxing. Improve your footwork,
                    develop devastating combinations, and enhance your defensive
                    skills.
                  </p>
                </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
