import { FeatureLdg, InfoLdg, TestimonialType } from 'types'

export const infos: InfoLdg[] = [
  {
    title: 'Empower your projects',
    description:
      'Unlock the full potential of your projects with our open-source SaaS platform. Collaborate seamlessly, innovate effortlessly, and scale limitlessly.',
    image: '/_static/illustrations/work-from-home.jpg',
    list: [
      {
        title: 'Collaborative',
        description: 'Work together with your team members in real-time.',
        icon: 'laptop'
      },
      {
        title: 'Innovative',
        description: 'Stay ahead of the curve with access constant updates.',
        icon: 'settings'
      },
      {
        title: 'Scalable',
        description:
          'Our platform offers the scalability needed to adapt to your needs.',
        icon: 'search'
      }
    ]
  },
  {
    title: 'Seamless Integration',
    description:
      'Integrate our open-source SaaS seamlessly into your existing workflows. Effortlessly connect with your favorite tools and services for a streamlined experience.',
    image: '/_static/illustrations/work-from-home.jpg',
    list: [
      {
        title: 'Flexible',
        description:
          'Customize your integrations to fit your unique requirements.',
        icon: 'laptop'
      },
      {
        title: 'Efficient',
        description: 'Streamline your processes and reducing manual effort.',
        icon: 'search'
      },
      {
        title: 'Reliable',
        description:
          'Rely on our robust infrastructure and comprehensive documentation.',
        icon: 'settings'
      }
    ]
  }
]

export const features: FeatureLdg[] = [
  {
    title: 'Feature 1',
    description:
      'Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.',
    link: '/',
    icon: 'nextjs'
  },
  {
    title: 'Feature 2',
    description:
      'Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.',
    link: '/',
    icon: 'google'
  },
  {
    title: 'Feature 3',
    description:
      'Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.',
    link: '/',
    icon: 'gitHub'
  },
  {
    title: 'Feature 4',
    description:
      'Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.',
    link: '/',
    icon: 'laptop'
  },
  {
    title: 'Feature 5',
    description:
      'Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.',
    link: '/',
    icon: 'user'
  },
  {
    title: 'Feature 6',
    description:
      'Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.',
    link: '/',
    icon: 'copy'
  }
]

export const testimonials: TestimonialType[] = [
  {
    name: 'Thai L.',
    job: 'Entrepreneur',
    image: '/_static/avatars/thai-yelp.jpg',
    review: `Cool place to train. Very beginner friendly. The coaches and fighters make you feel welcomed. You get a good workout and learn a lot about fighting. I also like that it is kept very clean in there. 5 stars!`
  },
  {
    name: 'Mike T',
    job: 'Marketing Manager',
    image: '/_static/avatars/shadcn.jpeg',
    review: `Coach Larry is awesome. He breaks it down in simple yet effective techniques that builds confidence. What I like most about the class are the students. No ego, friendly, and fun.`
  },
  {
    name: 'Qua W.',
    job: 'Business Owner',
    image: '/_static/avatars/qua-yelp.jpg',
    review: `Larry's kickboxing classes at Nerds Fighting are seriously something else. He's got this way of breaking down martial arts that makes it super approachable for everyone. You walk in, and whether you're new or you've been doing this for years, you immediately feel welcome. The whole "meathead" stereotype? Yeah, that's not a thing here.

      Larry's built this space where you can geek out about technique like you're analyzing a Starcraft match, and then jump into sparring like you're Saenchai in a Muay Thai training camp. It's crazy--one minute you're talking Magic the Gathering, and the next you're trading kicks. What makes this place special is how it blends martial arts with nerd culture in a way that just works.

      Everyone, no matter their age or background, feels like they belong here. It's not just about getting in shape; it's about the community. If you want a place where you can be yourself, talk nerdy, and still train hard, Nerds Fighting is the spot. I highly recommend!`
  }

  // {
  //   name: 'Michael Wilson',
  //   job: 'Project Manager',
  //   image: 'https://randomuser.me/api/portraits/men/5.jpg',
  //   review:
  //     "I'm impressed by the quality of code and clear documentation of next-saas-stripe-starter. Kudos to the team!"
  // },
  // {
  //   name: 'Sophia Garcia',
  //   job: 'Data Analyst',
  //   image: 'https://randomuser.me/api/portraits/women/6.jpg',
  //   review:
  //     'next-saas-stripe-starter provided me with the tools I needed to efficiently manage user data. Thank you so much!'
  // }
]
