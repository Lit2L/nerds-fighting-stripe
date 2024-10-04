import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import { HeaderSection } from '../shared/header-section'

const faqData = [
  {
    id: 'item-1',
    question: 'What to bring?',
    answer: [
      '- Water bottle.',
      '- Boxing or Muay Thai Gloves (14-16oz)',
      '- Shin Guards',
      '- Hand Wraps [optional]',
      '- Mouth Guard [optional]',
      '- Headgear [optional]',
      '- Towel [optional]'
    ]
  },
  {
    id: 'item-2',
    question: 'How much is the Pro Membership plan?',
    answer:
      'The Pro Membership Plan which is priced at $125/month currently for a limited time with a New Club Special which prices the membership at $100/month. It provides access to our core features and is billed on a monthly basis automatically.'
  },
  {
    id: 'item-3',
    question: 'How do I cancel my subscription?',
    answer: `You can cancel your subscription at any time by visiting your account settings. Once you cancel, you'll still have access to your account until the end of your billing cycle. Cancellation charges may apply.`
  },
  {
    id: 'item-4',
    question: 'Are drop-ins available?',
    answer:
      'Absolutely! We offer drop-in classes for $25 per class. You can pay at the gym via cash, venmo or zelle or online via our website.'
  },

  {
    id: 'item-5',
    question: 'Can I try the class before signing up?',
    answer:
      'Of Course!  Please come in for a free trial class available for any new members.  Refer a friend to recieve one free class.  You can sign up for a trial class on our website or by contacting us directly.'
  },
  {
    id: 'item-6',
    question: 'Is sparring allowed?',
    answer:
      'Anyone over 18 can spar as. However we may limit members from sparring too much. Safety is our highest concern.'
  },
  {
    id: 'item-7',
    question: 'Can we spar?',
    answer:
      'All consenting adults are allowed to spar if you want to. However we may limit members from sparring too much. Safety is our highest concern.'
  }
]

export function FaqSection() {
  return (
    <section className='mx-auto max-w-4xl rounded-md bg-neutral-950/80 p-6 text-emerald-50 shadow-2xl shadow-emerald-600/50'>
      <HeaderSection
        label='FAQ'
        title='Frequently Asked Questions'
        subtitle='Most common questions we get asked.'
      />

      <Accordion
        type='single'
        collapsible
        className='my-6 w-full rounded-md bg-neutral-900/60 p-6'
      >
        {faqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className='md:text-md rounded-xl bg-neutral-50 px-3 pt-3 text-secondary-foreground lg:m-3 lg:text-lg'>
              {Array.isArray(faqItem.answer) ? (
                <ul>
                  {faqItem.answer.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{faqItem.answer}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
