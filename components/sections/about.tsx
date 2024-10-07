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
            <strong className='text-md text-center font-light text-gray-500'>
              Train for Life
            </strong>

            <div className='my-12 h-full max-w-2xl rounded-3xl border border-gray-500/20 bg-zinc-900/70 drop-shadow'>
              <div className='flex flex-col items-center justify-center p-3 text-left'>
                <p className='text-left text-xl font-bold text-white dark:text-white'>
                  Who We Are
                </p>
                <p className='md:text-md p-1 font-genos text-lg leading-8 text-white dark:text-white'>
                  <Separator className='my-6' />
                  <span className='gap-3 font-bold text-emerald-500'>
                    Nerds Fighting
                  </span>{' '}
                  is a Muay Thai and Martial Arts training club and we provide a
                  workout and a practice that will improve you physical and
                  mental health and journey your personal growth through Muay
                  Thai training. <br />
                  <br />
                  The math is simple; your quality life will depend on your
                  ability to keep physically fit, mentally sharp and spiritually
                  confident. The practice of Muay Thai is rich with wisdom,
                  skills, techniques, challenges and the lessons that await for
                  you to overcome on your journey. You can only win by trying,
                  your future self will thank you.
                  {/*
                  You&apos;ll feel youthful, energetic, strong, confident,
                  calmer and the list goes on and on. . You&apos;ll never be
                  pressured into competing or anything else you are not
                  comfortable with. Our main focus is on your health and
                  fitness. The math is simple; Your quality of life depend
                  mainly on your ability to keep physically fit, remain mentally
                  sharp and stay spiritually confident and experience has taught
                  us Muay Thai is the funnest, most engaging and rewarding way
                  to workout. Come in for a free class and experience it for
                  yourself. The art of Muay Thai is rich with wisdom,
                  challenges, pays you pack and rewards you for taking the time
                  to learn learning it you quite like Muay Thai. We designed our
                  workouts to get your body moving and moving with a purpose.
                  Nothing else in the world can return has the biggest return on
                  the time invested in training than with our Muay Thai
                  Kickboxing program. */}
                  {/* #physically improves your physical strength, cardio,
                  conditioning, flexibility, balance, coordination, agility,
                  speed, power, endurance all at the same time. */}
                  <br />
                  {/* , mental
                  toughness, mental sharpness  and confidence, */}
                  <br />
                  We specialize in training newbies and newcomers. We invite you
                  to join us for a free trial class and decide if we&apos;re a
                  good fit for you.
                  {/* yourself.  No pressure to join. We specialize in introducing complete newbies to the
                  sport and martial arts and turning them into confident and
                  skilled practitioners. family is a Muay Thai training gym for
                  the nerds. We value technique, skill, physical fitness and the
                  health of your brain above all else. We are a gym that
                  considers your Brain Health and your overall longevity to be
                  the biggest concern while designing our Muay Thai program. Our
                  training style is rooted in the belief that the Art of of Muay
                  Thai is rich with wisdom and skills to be learned and also
                  contain lessons about yourself that reveal the truth about
                  your physical and mental limitations. The practice of Muay
                  Thai is a blessing that contains opportunities to safely and
                  methodically face your personal fears at your own pace and
                  within a controlled supervised environment. Become strong
                  within uncertainty, become courageous within fear, become
                  confident within doubt, become disciplined within chaos,
                  humble within victory and defeat. prioritizing the health of
                  your brain, developing a with the health of your brain, your
                  well-being and personal growth. We put Health and Longevity at
                  the forefront, believing that both a fit body and mental
                  sharpness are essential to your quality of life. Finally, we
                  focus on developing Technique and Skill, understanding that
                  mastery of Muay Thai comes through disciplined practice and
                  dedication. family began as an empathetic is grounded in our
                  philosophy that is rooted in the philosophy that every person
                  in the world would benefit in from feeling healthier, more fit
                  and inside a stronger body. and strong from the skills, in the
                  style of Muay Thai Kickboxing learning to fight will
                  strengthen that a style and philosophy that ranks a hierarchy
                  of longevity, began with a goal to is a Muay Thai journey
                  began with a goal rooted in the values we of priority that
                  guides the methodology and philosophy in our style of
                  training. express our core values <br /> is rooted in began
                  with a goal and Brain Cells, Longevity, Health, Technique, a
                  belief that Muay Thai Kickboxing is a practice that is rich
                  with lessons that reveal the truth about your physical and
                  mental limitations. The practice of Muay Thai is a blessing
                  that contain opportunities to safely and methodically face
                  your personal fears at your own pace and within a controlled
                  supervised environment. */}
                  {/* <br />
                  <br />
                  Become strong within uncertainty, become courageous within
                  fear, become confident within doubt, become disciplined within
                  chaos, humble within victory and defeat. <br />
                  <br />
                  martial arts training can transform the lives of most everyday
                  people because within the art of Muay Thai contains the
                  challenge of overcoming yourself. Life becomes unnecessarily
                  more difficult when you are . are typically our own worst
                  enemies. physically and spiritual challenges, obstacles, Muay
                  Thai by providing challenges with losses and successes, needed
                  to overcome fears, to have the confidence in themselves to be
                  ready for anything that may come their way. lives in many ways
                  and therefore we want to . */}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

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
