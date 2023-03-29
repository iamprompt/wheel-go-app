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
    label: 'page.announcements',
    icon: 'campaign',
    iconPosition: 'right',
    iconColor: COLORS.error[500],
    href: '/announcements',
  },
  {
    label: 'page.settings',
    href: '/settings',
  },
  {
    label: 'page.how_to_use',
    href: '/howto',
  },
  {
    label: 'page.faq_short',
    href: '/faq',
  },
  {
    label: 'page.help',
    href: '/help',
  },
] satisfies DrawerItem[]
