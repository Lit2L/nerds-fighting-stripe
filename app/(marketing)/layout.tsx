import { FloatingNavDock } from '@/components/FloatingDock'
import { Footer } from '@/components/layout/footer'
import { NavBar } from '@/components/layout/navbar'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='relative min-h-screen w-full overflow-x-hidden'>
      <header className='fixed inset-x-0 top-0 z-40 h-20 bg-gradient-to-bl from-emerald-500/90 via-emerald-400/70 to-emerald-600/95'>
        <NavBar scroll={true} />
      </header>
      <main className='flex-1'>{children}</main>
      <div className='fixed bottom-0 left-0 right-0 h-20'>
        <FloatingNavDock />
      </div>
      <Footer />
    </div>
  )
}
