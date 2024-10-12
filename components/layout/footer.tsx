import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { ModeToggle } from '../ui/mode-toggle'

export const Footer = () => {
  return (
    <section
      id='footer'
      className='mt-6 flex border-t bg-neutral-900/90 py-6 font-genos'
    >
      <div className='container flex w-full items-center justify-between'>
        <div className=''>
          <span className='text-lg text-primary-foreground'>
            NerdsFighting Copyright &copy; 2024. All rights reserved.
          </span>
          <p className='text-left text-sm text-muted-foreground'>
            Built by{' '}
            <Link
              href={siteConfig.url}
              target='_blank'
              rel='noreferrer'
              className='font-semibold underline underline-offset-8'
            >
              @Larry||_
            </Link>
            . Located at{' '}
            <Link
              href='https://www.williamsmma.com/contact.html'
              target='_blank'
              rel='noreferrer'
              className='underline-offset-6 font-medium underline'
            >
              Williams MMA - Martial Arts Academy
            </Link>
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <ModeToggle />
        </div>
      </div>
    </section>
  )
}
