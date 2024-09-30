import Image from 'next/image'
import { CiVideoOn } from 'react-icons/ci'
import { FaYinYang } from 'react-icons/fa'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const featureCards = [
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
    icon: <GiYinYang className='size-6 text-white' />,
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
      className='py- container relative min-h-full w-full bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] dark:bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)]'
    >
      <div className=''>
        {/* <h2 className='my-1 text-center font-heading text-3xl font-bold leading-[1.1] md:text-3xl'>
          What Nerds?
        </h2> */}
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
              The Dojo.
              <FaYinYang className='-z-10 mx-auto size-12' />
            </h3>
            <div className='my-12 h-full max-w-2xl rounded-3xl border border-gray-500/20 bg-zinc-900/70 drop-shadow'>
              <div className='flex flex-col items-center justify-center p-3 text-left'>
                <p className='md:text-md font-genos p-3 text-lg font-semibold leading-8 text-white dark:text-white'>
                  <span className='font-heading text-lg leading-8 text-emerald-500'>
                    Nerds Fighting
                  </span>{' '}
                  began with the idea that no matter how wierd you think you are
                  or how nerdy you think your hobbies and interests might be,
                  everyone should be able to live life with less fear and with
                  the confidence of a fighter. Muay Thai training inherantly
                  contains wisdom, skill, and many important life lessons that
                  would be difficult to replicate for other avenues. So whether
                  you&apos;re a book worm, a business owner, a mom, a dad, a
                  student, or a nerd... we want to invite you to our martial
                  arts club and we hope to see you soon.
                  {/* The road is challenging but
                  the skills and the lessons you learn about yourself are
                  contain lessons have the powermany lessons that teach you
                  things a "It is better to be a warrior in a garden, than a
                  gardener in a war" many life changing be the principle that
                  Muay Thai, the training, and the lifestyle of a healthy
                  martial artist should be available to everyone.  */}
                </p>
              </div>
            </div>
            <Separator className='my-3 bg-white' />
          </div>
        </div>

        <div className='flex w-full flex-col items-center justify-center gap-12'>
          {featureCards.map((card) => (
            <div
              key={card.id}
              className='flex flex-col items-center justify-center'
            >
              {card.id % 2 === 0 ? (
                <Card className='flex w-full max-w-4xl flex-col items-center justify-center gap-16 bg-transparent md:flex-row'>
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
                  <div className='flex w-[350px] flex-col space-y-3'>
                    <Badge className='md:text-md rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 font-heading text-xs uppercase tracking-wide text-red-900 shadow-lg shadow-red-900 sm:tracking-wide'>
                      {card.info}
                    </Badge>
                    <div className='flex w-full translate-x-6 gap-3'>
                      {card.icon}

                      <h3 className='text-md font-heading'>{card.title}</h3>
                    </div>

                    <p className='ml-6 w-[300px] font-cal text-sm font-light leading-6 text-white'>
                      {card.description}
                    </p>
                  </div>
                </Card>
              ) : (
                <Card className='flex w-full max-w-4xl flex-col-reverse items-center justify-center gap-16 bg-transparent md:flex-row'>
                  <div className='flex w-[350px] flex-col space-y-3'>
                    <Badge className='md:text-md rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 font-heading text-xs uppercase tracking-wide text-emerald-900 shadow-lg shadow-red-900 sm:tracking-wide'>
                      {card.info}
                    </Badge>
                    <div className='flex w-full gap-3'>
                      {card.icon}
                      <h3 className='text-md font-heading'>{card.title}</h3>
                    </div>

                    <p className='w-[300px] font-cal text-sm font-light leading-6 text-white'>
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
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
