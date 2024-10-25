import { DocsConfig } from 'types'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      id: 0,
      title: 'Documentation',
      href: '/docs'
    },
    {
      id: 1,
      title: 'Guides',
      href: '/guides'
    }
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          id: 0,
          title: 'Introduction',
          href: '/docs'
        },
        {
          id: 0,
          title: 'Installation',
          href: '/docs/installation'
        }
      ]
    },
    {
      title: 'Configuration',
      items: [
        {
          id: 0,
          title: 'Authentification',
          href: '/docs/configuration/authentification'
        },
        {
          id: 1,
          title: 'Blog',
          href: '/docs/configuration/blog'
        },
        {
          id: 2,
          title: 'Components',
          href: '/docs/configuration/components'
        },
        {
          id: 3,
          title: 'Config files',
          href: '/docs/configuration/config-files'
        },
        {
          id: 4,
          title: 'Database',
          href: '/docs/configuration/database'
        },
        {
          id: 5,
          title: 'Email',
          href: '/docs/configuration/email'
        },
        {
          id: 6,
          title: 'Layouts',
          href: '/docs/configuration/layouts'
        },
        {
          id: 7,
          title: 'Markdown files',
          href: '/docs/configuration/markdown-files'
        },
        {
          id: 8,
          title: 'Subscriptions',
          href: '/docs/configuration/subscriptions'
        }
      ]
    }
  ]
}
