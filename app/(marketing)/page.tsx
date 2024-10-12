import { CalendlyWidget } from '@/components/calendly/calendly-widget'
import { About } from '@/components/sections/about'
import { FaqSection } from '@/components/sections/faqs'
import HeroLanding from '@/components/sections/hero-landing'
import NewClientFormSection from '@/components/sections/new-client'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'
import { Training } from '@/components/sections/training'

export default function IndexPage() {
  return (
    <div className='mx-auto w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl'>
      <HeroLanding />
      <About />
      <Training />
      <FaqSection />
      <Schedule />
      <Testimonials />
      <NewClientFormSection />
      <CalendlyWidget />
    </div>
  )
}
