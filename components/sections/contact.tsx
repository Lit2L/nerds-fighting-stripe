import * as React from 'react'
import Link from 'next/link'

import { footerLinks, homeLinks, siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Icons } from '../shared/icons'

export function Contact({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn('border-t font-genos text-lg', className)}>
      <div className='container grid max-w-6xl grid-cols-2 justify-between gap-6 rounded-lg border-4 bg-neutral-900 py-14'>
        <div className='w-full rounded-lg border-4 p-6'>
          {homeLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-2xl font-bold text-foreground'>
                Nerds Fighting Muay Thai Club
              </h4>
              <ul className='ml-3 mt-3 list-inside space-y-3'>
                {section.items?.map((link) => (
                  <>
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className='text-foreground hover:text-primary'
                      >
                        <span className='font-semibold'>Location:</span>{' '}
                        {link.name}
                      </Link>
                    </li>

                    <li key={link.address}>
                      <Link
                        href={link.href}
                        className='text-foreground hover:text-primary'
                      >
                        <span className='font-semibold'>Address:</span>{' '}
                        {link.address}
                      </Link>
                    </li>
                    <li key={link.phone}>
                      <Link
                        href={link.href}
                        className='text-foreground hover:text-primary'
                      >
                        <span className='font-semibold'>Contact:</span>{' '}
                        {link.phone}
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
