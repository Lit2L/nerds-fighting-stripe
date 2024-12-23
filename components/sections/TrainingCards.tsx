import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle
} from '@/components/ui/minimal-card'

export function TrainingCards() {
  const cards = [
    {
      title: 'Private Coaching',
      description: [
        'Customized training with an experienced coach.',
        'Accelerate abilities and master techniques',
        'Progress faster and see real results in  training'
      ],
      image: '/privatecoach.png'
    },
    {
      title: 'Video Analysis',
      description: [
        'Experienced coach analyzes your technique',
        'Teaches body mechanics and pinpoints areas for improvement',
        'Reinforces proper technique and helps develop better habits.'
      ],
      image: '/camera.jpg'
    },
    {
      title: 'Group Training',
      description: [
        'Supportive group of martial artists that train together',
        'Peak performance training involves calisthenics, drills, strength conditioning, and optional group sparring'
      ],
      image: '/groupClass.webp'
    },
    {
      title: 'Muay Thai',
      description: [
        'Learn stand-up striking skills involving punches and kicking through Muay Thai.',
        'Develop footwork, head movement, and combinations.',
        'Experience training with focus mitts',
        'Heavy bag work, and optional sparring'
      ],
      image: '/private.jpg'
    },
    {
      title: 'Boxing',
      description: [
        'Learn boxing fundamentals like footwork, head movement and combinations.',
        'Experience training  focus mitts, and heavy bag work.'
      ],
      image: '/mitts.jpg'
    }
  ]
  return (
    <section id='training' className='mx-auto w-full max-w-4xl'>
      <p className='mx-auto max-w-7xl py-6 text-center font-genos text-3xl font-bold tracking-tight text-black dark:text-white lg:text-3xl lg:leading-tight'>
        Life is better when you know how to fight
      </p>
      <div className='flex min-h-[600px] flex-col justify-center space-y-4 rounded-lg p-4'>
        <div className='relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2'>
          {cards.map((card, index) => (
            <MinimalCard key={index}>
              <MinimalCardImage src={card.image} alt={card.title} />
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              {Array.isArray(card.description) ? (
                card.description.map((desc, index) => (
                  <MinimalCardDescription key={index}>
                    {desc}
                  </MinimalCardDescription>
                ))
              ) : (
                <MinimalCardDescription>
                  {card.description}
                </MinimalCardDescription>
              )}
            </MinimalCard>
          ))}
        </div>
      </div>
    </section>
  )
}
