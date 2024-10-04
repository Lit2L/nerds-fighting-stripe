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
    answer: `We recommend bringing a pair of 16oz or 14oz Muay Thai or Boxing gloves, Shin Guards and water. Other optional recommendations include hand wraps, a mouth guard and, a towel. If you don't have gloves or shin guards, we have loaners available.`
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
      'Yes! We offer drop-in classes for $25 per class. You can pay at the gym or online through our website.'
  },

  {
    id: 'item-5',
    question: 'Can I try the class before signing up?',
    answer:
      'Yes!  We want you to find value in what we do before you commit to a membership with us so we offer a free trial class for anyone interested in joining our club. You can sign up for a trial class on our website or by contacting us directly.'
  }
]

export function FaqSection() {
  return (
    <section className='container max-w-4xl py-2'>
      <HeaderSection
        label='FAQ'
        title='Frequently Asked Questions'
        subtitle='Here are some common questions we get asked.'
      />

      <Accordion type='single' collapsible className='my-6 w-full'>
        {faqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className='text-md text-muted-foreground'>
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
