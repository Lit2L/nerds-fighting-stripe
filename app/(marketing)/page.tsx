import { About } from '@/components/sections/about'
import HeroLanding from '@/components/sections/hero-landing'
import NewClientFormSection from '@/components/sections/new-client'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'

export default function IndexPage() {
  return (
    <div>
      <HeroLanding />
      <About />
      <Schedule />
      <Testimonials />
      <NewClientFormSection />
    </div>
  )
}
