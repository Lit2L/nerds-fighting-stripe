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
  mailSupport: 'larryl@nerdsfighting.com'
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
      { id: 0, title: 'About', href: '/#about' },
      { id: 1, title: 'Enterprise', href: '#' },
      { id: 2, title: 'Terms', href: '/terms' },
      { id: 3, title: 'Privacy', href: '/privacy' }
    ]
  },
  {
    title: 'Product',
    items: [
      { id: 0, title: 'Security', href: '#' },
      { id: 1, title: 'Customization', href: '#' },
      { id: 2, title: 'Customers', href: '#' },
      { id: 3, title: 'Changelog', href: '#' }
    ]
  },
  {
    title: 'Docs',
    items: [
      { id: 0, title: 'Introduction', href: '#' },
      { id: 1, title: 'Installation', href: '#' },
      { id: 2, title: 'Components', href: '#' },
      { id: 3, title: 'Code Blocks', href: '#' }
    ]
  }
]
