import type { ComponentProps } from 'react'
import COLORS from '~/styles/colors'
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
    iconColor: COLORS.error[500],
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
