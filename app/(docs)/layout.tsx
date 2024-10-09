import { Footer } from '@/components/layout/footer'
import NavMobile from '@/components/layout/mobile-nav'
import { NavBar } from '@/components/layout/navbar'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className='flex flex-col'>
      <NavMobile />
      <NavBar />
      <MaxWidthWrapper className='min-h-screen' large>
        {children}
      </MaxWidthWrapper>
      <Footer />
    </div>
  )
}
