'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useSession } from 'next-auth/react'

import { docsConfig } from '@/config/docs'
import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { DocsSidebarNav } from '@/components/docs/sidebar-nav'
import { Icons } from '@/components/shared/icons'

import { ModeToggle } from '../ui/mode-toggle'

export function NavMobile() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const selectedLayout = useSelectedLayoutSegment()
  const documentation = selectedLayout === 'docs'

  const configMap = {
    docs: docsConfig.mainNav
  }

  const links =
    (selectedLayout && configMap[selectedLayout]) || marketingConfig.mainNav

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'fixed right-6 top-6 z-50 rounded-full transition-all duration-300 ease-in-out hover:text-muted-foreground focus:outline-none active:bg-muted md:hidden',
          open && 'hover:bg-muted active:bg-muted'
        )}
      >
        {open ? (
          <X className='size-10 border-4 text-muted-foreground' />
        ) : (
          <Menu className='size-10 text-black' />
        )}
      </button>

      <nav
        className={cn(
          'fixed inset-0 z-20 hidden h-full w-full overflow-auto bg-neutral-900/95 font-genos text-3xl lg:hidden',
          open && 'block'
        )}
      >
        <ul className='flex translate-y-36 flex-col p-12 indent-20'>
          {links &&
            links.length > 0 &&
            links.map(({ title, href }) => (
              <li key={href} className='py-3'>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className='flex w-full font-medium capitalize'
                >
                  {title}
                </Link>
              </li>
            ))}

          {session ? (
            <>
              {session.user.role === 'ADMIN' ? (
                <li className='py-3'>
                  <Link
                    href='/admin'
                    onClick={() => setOpen(false)}
                    className='flex w-full font-medium capitalize'
                  >
                    Admin
                  </Link>
                </li>
              ) : null}

              <li className='py-3'>
                <Link
                  href='/dashboard'
                  onClick={() => setOpen(false)}
                  className='flex w-full font-medium capitalize'
                >
                  Dashboard
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='py-3'>
                <Link
                  href='/login'
                  onClick={() => setOpen(false)}
                  className='flex w-full font-medium capitalize'
                >
                  Login
                </Link>
              </li>

              <li className='py-3'>
                <Link
                  href='/register'
                  onClick={() => setOpen(false)}
                  className='flex w-full font-medium capitalize'
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>

        {documentation ? (
          <div className='mt-8 block md:hidden'>
            <DocsSidebarNav setOpen={setOpen} />
          </div>
        ) : null}

        <div className='mt-5 flex items-center justify-end space-x-4'>
          <ModeToggle />
        </div>
      </nav>
    </div>
  )
}
