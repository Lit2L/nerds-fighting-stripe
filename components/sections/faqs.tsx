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
    question: 'What kind of workout is this?',
    answer:
      'We have a wide variety of kickboxing, muay thai and boxing workouts that utilize the heavy bag, focus mitts, thai pads, body weight exercises and more.   Workouts also include with a warm-up, stretch and conditioning drills followed by 30 minutes of open gym time.'
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
    question: 'Do I have to spar?',
    answer: 'Nope. Sparring is never required. '
  },

  {
    id: 'item-4',
    question: 'Can I try a class?',
    answer:
      'Come in today and get the first week free.   You can sign up via website or by contacting us directly .'
  },
  {
    id: 'item-5',
    question: 'Are drop-in classes available?',
    answer:
      'Yes! We have drop-ins for $25 per class. You can pay at the gym via cash, venmo or zelle or online via our website.'
  },
  {
    id: 'item-6',
    question: 'How do i sign up?',
    answer:
      'Join today for a grand opening special and pay $75/month, normally $125 a month with no contract, no enrollment fees. Your class starts when you get here. We run you through a workout consisting of cardio, technique and application (bag work, pad work, partner drills, and sparring(optional)). Beginners and advanced train the same just focus on different aspects. First week is free. Give yourself 1 1/2 hours to train.'
  }
]

export function FaqSection() {
  return (
    <section className='container mx-auto max-w-4xl rounded-md bg-neutral-950/80 p-6 text-emerald-50 shadow-2xl shadow-emerald-600/50'>
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
