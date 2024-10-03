import Image from 'next/image'

import { testimonials } from '@/config/landing'
import { HeaderSection } from '@/components/shared/header-section'

export default function Testimonials() {
  return (
    <section>
      <div className='container mt-16 flex max-w-6xl flex-col gap-10 rounded-lg bg-neutral-800/30 py-24 font-genos shadow-gray-800 sm:gap-y-16'>
        <HeaderSection
          label='Testimonials'
          title='Read our members reviews'
          subtitle='We love and appreciate your reviews! Thank you!'
        />

        <div className='columns-1 gap-5 space-y-5 bg-[radial-gradient(circle_400px_at_50%_375px,#181818,transparent)] py-6 font-genos dark:bg-[radial-gradient(circle_350px_at_50%_350px,#14443780,transparent)] md:columns-2'>
          {testimonials.map((item) => (
            <div className='break-inside-avoid' key={item.name}>
              <div className='relative rounded-xl bg-muted/80'>
                <div className='flex flex-col px-4 py-5 sm:p-6'>
                  <div>
                    <div className='relative mb-4 flex items-center gap-3'>
                      <span className='relative inline-flex size-10 items-center justify-center rounded-full text-base'>
                        <Image
                          width={100}
                          height={100}
                          className='size-full rounded-full border'
                          src={item.image}
                          alt={item.name}
                        />
                      </span>
                      <div>
                        <p className='text-sm font-semibold text-foreground'>
                          {item.name}
                        </p>
                        <p className='text-sm text-foreground'>{item.job}</p>
                      </div>
                    </div>
                    <q className='font-light text-foreground'>{item.review}</q>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
