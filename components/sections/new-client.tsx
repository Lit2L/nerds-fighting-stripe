import React from 'react'
import Image from 'next/image'

import { TrialClassForm } from '../forms/trial-class-form'

export default function NewClientFormSection() {
  return (
    <>
      <div className='relative my-24 bg-black/20 font-genos text-foreground'>
        <div className='container py-24 lg:py-32'>
          <div className='text-center'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl'>
              Free Trial Class
            </h1>
            <p className='mt-3 text-xl text-muted-foreground'>
              Submit your email today and show up for your free trial class.
            </p>
            <div className='relative mx-auto mt-7 max-w-2xl'>
              <div className='flex w-full rounded-lg shadow-lg'>
                <TrialClassForm />
              </div>

              <div className='absolute end-0 top-0 hidden -translate-y-36 translate-x-28 md:block'>
                <Image
                  src='/_static/illustrations/boxing-ring.svg'
                  alt='404'
                  width={100}
                  height={100}
                  className='pointer-events-none mb-5 mt-6 dark:invert'
                />
              </div>

              <div className='absolute bottom-0 start-0 hidden -translate-x-32 -translate-y-32 md:block'>
                <Image
                  src='/_static/illustrations/punching-bag-green.svg'
                  alt='404'
                  width={100}
                  height={100}
                  className='pointer-events-none mb-5 mt-6 dark:invert'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
