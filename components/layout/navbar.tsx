'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { docsConfig } from '@/config/docs'
import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/use-scroll'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { DocsSearch } from '@/components/docs/search'
import { ModalContext } from '@/components/modals/providers'
import { Icons } from '@/components/shared/icons'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'

import Logo from '../Logo'
import { ModeToggle } from '../ui/mode-toggle'

interface NavBarProps {
  scroll?: boolean
  large?: boolean
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50)
  const { data: session, status } = useSession()
  const { setShowSignInModal } = useContext(ModalContext)

  const selectedLayout = useSelectedLayoutSegment()
  const documentation = selectedLayout === 'docs'

  const configMap = {
    docs: docsConfig.mainNav
  }

  const links =
    (selectedLayout && configMap[selectedLayout]) || marketingConfig.mainNav

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? 'border-b' : '') : 'border-b'
      }`}
    >
      <MaxWidthWrapper
        className='items-bg-center between flex h-20 w-full'
        large={documentation}
      >
        <div className='mx-3 flex w-full flex-1 justify-between gap-6 px-3 md:gap-10'>
          <Link href='/' className='flex size-20 items-center space-x-1.5'>
            <Logo />
          </Link>

          {links && links.length > 0 ? (
            <nav className='mr-6 hidden gap-6 md:flex md:space-x-3'>
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? '#' : item.href}
                  prefetch={true}
                  className={cn(
                    'text-md flex items-center tracking-tight text-white transition-colors duration-300 ease-in-out hover:text-white/50',
                    item.href.startsWith(`/${selectedLayout}`)
                      ? 'text-foreground'
                      : 'text-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <ModeToggle />
            </nav>
          ) : null}
        </div>

        <div className='flex items-center space-x-3'>
          {/* right header for docs */}
          {documentation ? (
            <div className='hidden flex-1 items-center space-x-4 sm:justify-end lg:flex'>
              <div className='hidden lg:flex lg:grow-0'>
                <DocsSearch />
              </div>
              <div className='flex lg:hidden'>
                <Icons.search className='size-6 text-muted-foreground' />
              </div>
              <div className='flex space-x-4'>
                <Link
                  href={siteConfig.links.github}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icons.gitHub className='size-7' />
                  <span className='sr-only'>GitHub</span>
                </Link>
              </div>
            </div>
          ) : null}

          {session ? (
            <Link
              href={session.user.role === 'ADMIN' ? '/admin' : '/dashboard'}
              className='hidden md:block'
            >
              <Button
                className='gap-2 px-5'
                variant='default'
                size='sm'
                rounded='full'
              >
                <span>Dashboard</span>
              </Button>
            </Link>
          ) : status === 'unauthenticated' ? (
            <Button
              className='hidden gap-2 px-5 md:flex'
              variant='default'
              size='sm'
              rounded='full'
              onClick={() => setShowSignInModal(true)}
            >
              <span className='font-heading'>Sign In</span>
              <Icons.arrowRight className='size-4' />
            </Button>
          ) : (
            <Skeleton className='hidden h-9 w-28 rounded-full lg:flex' />
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
