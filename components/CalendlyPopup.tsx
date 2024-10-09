'use client'

import { InlineWidget } from 'react-calendly'

export function CalendlyWidget() {
  return (
    <div className='calendly border-4'>
      <div className='App'>
        <InlineWidget
          url='https://calendly.com/spiderbear714/private-session-with-coach-larry'
          styles={{
            height: '1000px',
            backgroundColor: 'ffffff',
            border: '1px solid #00a2ff'
          }}
        />
      </div>
    </div>
  )
}
