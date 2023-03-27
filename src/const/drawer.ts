import type { ComponentProps } from 'react'
import type { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface DrawerItem {
  label: string
  icon?: ComponentProps<typeof MaterialIcons>['name']
  iconPosition?: 'left' | 'right'
  iconColor?: string
  href: string
}

export const DrawerItems = [
  {
    label: 'Announcements',
    icon: 'campaign',
    iconPosition: 'right',
    iconColor: '#DE2E21',
    href: '/announcements',
  },
  {
    label: 'Settings',
    href: '(settings)/settings',
  },
  {
    label: 'How to use',
    href: '/how-to-use',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  {
    label: 'Help',
    href: '/help',
  },
] satisfies DrawerItem[]
