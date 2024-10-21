import { stripe } from '@/lib/stripe'
import Product from '@/components/Product'
import { About } from '@/components/sections/about'
import { FaqSection } from '@/components/sections/faqs'
import HeroLanding from '@/components/sections/hero-landing'
import NewClientFormSection from '@/components/sections/new-client'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'
import { Training } from '@/components/sections/training'

const getProducts = async () => {
  const products = await stripe.products.list()

  const productsWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id })
      const features = product.metadata.features || ''
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
        metadata: { features }
      }
    })
  )

  return productsWithPrices
}
export default async function IndexPage() {
  const products = await getProducts()
  return (
    // <div className='mx-auto w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl'>
    <div className='mx-auto w-full'>
      <HeroLanding />
      <About />
      <Training />
      <FaqSection />
      <Schedule />
      <Testimonials />
      <NewClientFormSection />
      <main className='grid-cols-fluid container grid gap-8 pb-4'>
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </main>
      {/* <CalendlyWidget /> */}
    </div>
  )
}
