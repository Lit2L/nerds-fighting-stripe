import Image from 'next/image'
import { Calendar, Dumbbell } from 'lucide-react'
import { CiDumbbell, CiLocationOn } from 'react-icons/ci'
import { FaDumbbell } from 'react-icons/fa'
import {
  GiBoxingGlove,
  GiBoxingRing,
  GiJumpingRope,
  GiPunchingBag,
  GiWeightLiftingUp
} from 'react-icons/gi'
import { MdSportsMartialArts } from 'react-icons/md'

import { HeaderSection } from '@/components/shared/header-section'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'

import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'

const classes = [
  {
    id: 1,
    title: 'Sunday',
    description: 'Muay Thai',
    attributes:
      'Muay Thai, Boxing, Conditioning, Bag Work, Focus Mitts, Thai Pads, Partner & Group Drills',
    schedule: [{ id: 1, day: 'Sun', time: '6:00 AM' }]
  },
  {
    id: 2,
    title: 'Monday',
    description: 'Muay Thai',
    level: 'All levels',
    attributes:
      'Muay Thai, Boxing, Conditioning, Bag Work, Focus Mitts, Thai Pads, Partner & Group Drills',
    schedule: [{ id: 1, day: 'Mon', time: '9:00 AM' }]
  },

  {
    id: 3,
    title: 'Wednesday',
    level: 'All levels',
    description: 'Muay Thai',
    attributes:
      'Muay Thai, Boxing, Conditioning, Bag Work, Focus Mitts, Thai Pads, Partner & Group Drills',
    schedule: [
      {
        id: 1,
        day: 'Wed',
        time: '9:00 AM'
      }
    ]
  },
  {
    id: 4,
    title: 'Thursday',
    level: 'all levels',
    description: 'Muay Thai',
    attributes:
      'Muay Thai, Boxing, Conditioning, Bag Work, Focus Mitts, Thai Pads, Partner & Group Drills',
    schedule: [
      {
        id: 1,
        day: 'Thurs',
        time: '6:00 AM'
      }
    ]
  },
  {
    id: 5,
    title: 'Saturday',
    level: 'All levels',
    description: 'Muay Thai.',
    attributes:
      'Muay Thai, Boxing, Conditioning, Bag Work, Focus Mitts, Thai Pads, Partner & Group Drills',
    schedule: [{ id: 1, day: 'Sat', time: '8:00 AM' }]
  }
]

export function Schedule() {
  return (
    <section className='dark:bg-[radial-gradient(circle_400px_at_50%_350px,#144437,transparent)]'>
      <div className='pb-6 pt-28 font-sans'>
        <MaxWidthWrapper>
          <HeaderSection
            label='Updated since 10-1-2024'
            title='Muay Thai Schedule'
            subtitle=''
          />

          <div className='mt-9 flex flex-wrap justify-center gap-6'>
            {classes &&
              classes.map((item) => (
                <Card
                  key={item.id}
                  className='dark:shadow-neutral-800/ flex h-52 w-64 flex-col rounded-xl border-zinc-700 bg-zinc-900/95 p-3 shadow-xl shadow-neutral-500/70 transition-all duration-300 hover:scale-95 dark:bg-zinc-800 dark:shadow-neutral-600/20'
                >
                  <CardTitle className='p-1'>
                    <div className='flex items-center justify-between gap-3'>
                      <MdSportsMartialArts className='size-6 text-white' />
                      <h3 className='font-sans text-white dark:text-gray-300'>
                        {item.title}
                      </h3>
                    </div>
                  </CardTitle>
                  <Separator className='my-1' />

                  <div className='flex flex-col items-center'>
                    {item.schedule.map((schedule) => (
                      <div
                        key={schedule.id}
                        className='flex w-full items-center justify-between border-b border-white/10'
                      >
                        <Calendar className='w-1/16 mx-2 size-4 text-emerald-600 dark:text-emerald-500' />
                        <div
                          key={schedule.time}
                          className='flex w-full items-center justify-between py-1'
                        >
                          <span className='w-1/16 text-md font-semibold text-white dark:text-gray-300'>
                            {schedule.time}
                          </span>

                          <p className='w-3/16 text-md m-1 flex font-genos font-semibold capitalize tracking-wide text-white dark:text-green-500'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='mt-2 flex w-full flex-1 flex-col items-end justify-between'>
                    <span className='flex w-full items-center justify-between'>
                      <GiPunchingBag className='size-6 text-red-500' />
                      <p className='ml-3 font-genos text-xs font-semibold tracking-wide text-white dark:text-gray-300'>
                        {item.attributes}
                      </p>
                    </span>
                  </div>
                </Card>
              ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}
