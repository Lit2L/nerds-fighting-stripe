// import { infos } from '@/config/landing'
import { About } from '@/components/sections/about'
// import BentoGrid from '@/components/sections/bentogrid'
import HeroLanding from '@/components/sections/hero-landing'
// import InfoLanding from '@/components/sections/info-landing'
// import Powered from '@/components/sections/powered'
// import PreviewLanding from '@/components/sections/preview-landing'
import { Schedule } from '@/components/sections/schedule'

// import Testimonials from '@/components/sections/testimonials'

export default function IndexPage() {
  return (
    <div>
      <HeroLanding />
      <About />
      {/* <Powered /> */}
      {/* <BentoGrid />
      <InfoLanding data={infos[0]} reverse={true} /> */}
      {/* <InfoLanding data={infos[1]} /> */}
      <Schedule />
      {/* <Testimonials /> */}
    </div>
  )
}
