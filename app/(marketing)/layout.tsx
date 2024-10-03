import { Footer } from '@/components/layout/footer'
import { NavMobile } from '@/components/layout/mobile-nav'
import { NavBar } from '@/components/layout/navbar'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <header className='fixed  inset-x-0 top-0 z-40 h-20 bg-gradient-to-bl from-emerald-500/90 via-emerald-400/70 to-emerald-600/95'>
          <NavMobile />
          <NavBar scroll={true} />
      </header>
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}
