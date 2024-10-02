import { HomeLinks, SidebarNavItem, SiteConfig } from 'types'

const site_url = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const siteConfig: SiteConfig = {
  name: 'Nerds Fighting',
  description:
    'Nerds Fighting is a Muay Thai gym located in Huntington Beach/Fountain Valley, CA. We offer classes for all levels, from beginners to advanced. Our classes are designed to help you get in shape, build confidence, and learn self-defense.',
  url: site_url,
  address: `8780 Warner Ave, Suite 7
  Fountain Valley, CA 92708`,
  phone: `(714) 866-6926`,
  locationName: 'Williams MMA - Martial Arts Academy',
  email: 'larryl@nerdsfighting.com',
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    williamsMma: 'https://williamsmma.com/',
    github: 'https://github.com/mickasmt/next-saas-stripe-starter'
  },
  mailSupport: 'support@saas-starter.com'
}

export const homeLinks: HomeLinks[] = [
  {
    title: 'Williams MMA - Martial Arts Academy',
    items: [
      {
        name: 'Williams MMA - Martial Arts Academy',
        href: 'https://www.williamsmma.com/contact.html',
        address: `8780 Warner Ave. Suite 7, Fountain Valley, CA 92708`,
        phone: `(714) 866-6926`
      }
    ]
  }
]
export const footerLinks: SidebarNavItem[] = [
  {
    title: 'Company',
    items: [
      { title: 'About', href: '#' },
      { title: 'Enterprise', href: '#' },
      { title: 'Terms', href: '/terms' },
      { title: 'Privacy', href: '/privacy' }
    ]
  },
  {
    title: 'Product',
    items: [
      { title: 'Security', href: '#' },
      { title: 'Customization', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Changelog', href: '#' }
    ]
  },
  {
    title: 'Docs',
    items: [
      { title: 'Introduction', href: '#' },
      { title: 'Installation', href: '#' },
      { title: 'Components', href: '#' },
      { title: 'Code Blocks', href: '#' }
    ]
  }
]
