import type { ComponentProps } from 'react'
import COLORS from '~/styles/colors'
import type { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface RecordListItem {
  label: string
  icon: ComponentProps<typeof MaterialIcons>['name']
  iconColor: string
  unit: {
    singular: string
    plural: string
  }
  href: string
}

export const RecordListItems = [
  {
    label: 'Favorite Places',
    icon: 'favorite_border',
    iconColor: COLORS.pomegranate[300],
    unit: {
      singular: 'place',
      plural: 'places',
    },
    href: '/records/favorites',
  },
  {
    label: 'Place Reviews',
    icon: 'star_border',
    iconColor: COLORS.warning[400],
    unit: {
      singular: 'review',
      plural: 'reviews',
    },
    href: '/records/reviews',
  },
  {
    label: 'Contributed Routes',
    icon: 'route',
    iconColor: COLORS.success[400],
    unit: {
      singular: 'route',
      plural: 'routes',
    },
    href: '/records/routes',
  },
] satisfies RecordListItem[]
