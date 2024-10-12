'use client'

import { PopupButton } from 'react-calendly'

export default function CalendlyPopup() {
  return (
    <div className='cal_div'>
      <PopupButton
        className='rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80'
        url='https://calendly.com/spiderbear714/private-session-with-coach-larry'
        rootElement={document.getElementById('calendly-root')!}
        text='Schedule Appointment'
      />
    </div>
  )
}
