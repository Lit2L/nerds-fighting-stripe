import { About } from '@/components/sections/about'
import { FaqSection } from '@/components/sections/faqs'
import HeroLanding from '@/components/sections/hero-landing'
import NewClientFormSection from '@/components/sections/new-client'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'
import { Training } from '@/components/sections/training'

export default function IndexPage() {
  return (
    <div className='mx-auto min-h-screen'>
      <HeroLanding />
      <Training />
      <About />
      <FaqSection />
      <Schedule />
      <Testimonials />
      <NewClientFormSection />
    </div>
  )
}
