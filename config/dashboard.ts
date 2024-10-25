import { UserRole } from '@prisma/client'

import { SidebarNavItem } from 'types'

export const sidebarLinks: SidebarNavItem[] = [
  {
    title: 'MENU',
    items: [
      {
        id: 0,
        href: '/admin',
        icon: 'laptop',
        title: 'Admin Panel',
        authorizeOnly: UserRole.ADMIN
      },
      {
        id: 1,
        href: '/dashboard',
        icon: 'dashboard',
        title: 'Dashboard'
      },
      {
        id: 2,
        href: '/dashboard/billing',
        icon: 'billing',
        title: 'Billing',
        authorizeOnly: UserRole.USER
      },

      {
        id: 3,
        href: '/dashboard/charts',
        icon: 'lineChart',
        title: 'Charts'
      },
      {
        id: 4,
        href: '/admin/orders',
        icon: 'package',
        title: 'Orders',
        badge: 2,
        authorizeOnly: UserRole.ADMIN
      },
      {
        id: 5,
        href: '#/dashboard/posts',
        icon: 'post',
        title: 'User Posts',
        authorizeOnly: UserRole.USER,
        disabled: true
      }
    ]
  },
  {
    title: 'OPTIONS',
    items: [
      {
        id: 0,
        href: '/dashboard/settings',
        icon: 'settings',
        title: 'Settings'
      },
      {
        id: 1,
        href: '/',
        icon: 'home',
        title: 'Homepage'
      },
      {
        id: 2,
        href: '/docs',
        icon: 'bookOpen',
        title: 'Documentation'
      },
      {
        id: 3,
        href: '#',
        icon: 'messages',
        title: 'Support',
        authorizeOnly: UserRole.USER,
        disabled: true
      }
    ]
  }
]
