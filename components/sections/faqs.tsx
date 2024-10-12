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
    question: 'What can I expect during class?',
    answer:
      'Workouts begin with a warm-up and stretch, technique and drills with some pad or heavy bag work, ending with some conditioning.'
  },

  {
    id: 'item-2',
    question: 'What to bring?',
    answer: [
      '- Water bottle',
      '- Boxing or Muay Thai Gloves (14-16oz) (Loaner gloves available)',
      '- Shin Guards (Loaners available)',
      '- Hand Wraps [optional]',
      '- Mouth Guard [optional]',
      '- Headgear [optional]',
      '- Towel [optional]'
    ]
  },

  {
    id: 'item-3',
    question: 'Are drop-ins available?',
    answer:
      'Absolutely! We offer drop-in classes for $25 per class. You can pay at the gym via cash, venmo or zelle or online via our website.'
  },

  {
    id: 'item-4',
    question: `What if I can't make it through the workout?`,
    answer:
      'Take a break anytime you feel the need to.  Never feel the need to push yourself harder then you can handle. Take a break and hydrate at any time and for any reason. Workouts are designed to be as easy or as hard as you can handle. Just turn up or turn down your intensity.   We want you to be and feel safe at all times.'
  },
  {
    id: 'item-5',
    question: 'Do we have to spar?',
    answer:
      'No. Sparring is not at all required. We are only here to help you reach your goals. If you are interested in sparring, we have a separate sparring class.'
  },
  {
    id: 'item-6',
    question: 'Can I try the class before signing up?',
    answer:
      'Absolutely! Come in for a free workout to see if it&apos;s a good fit for you.  First class is always free.  You can sign up for a trial class on our website or by contacting us directly.'
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
            <AccordionContent className='md:text-md rounded-xl bg-neutral-300 px-3 pt-3 text-primary-foreground lg:m-3 lg:text-lg'>
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
