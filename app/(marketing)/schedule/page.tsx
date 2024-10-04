import { constructMetadata } from '@/lib/utils'
import { Schedule } from '@/components/sections/schedule'

export const metadata = constructMetadata({
  title: 'Schedule Nerds Fighting',
  description: 'Muay Thai Kickboxing Club.'
})

export default function SchedulePage() {
  return (
    <div className='flex min-h-screen flex-col py-20'>
      <Schedule />
    </div>
  )
}
