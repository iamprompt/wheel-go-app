import type { ComponentProps } from 'react'
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
    iconColor: '#FF5C9A',
    unit: {
      singular: 'place',
      plural: 'places',
    },
    href: '/records/favorites',
  },
  {
    label: 'Place Reviews',
    icon: 'star_border',
    iconColor: '#FFC629',
    unit: {
      singular: 'review',
      plural: 'reviews',
    },
    href: '/records/reviews',
  },
  {
    label: 'Contributed Routes',
    icon: 'route',
    iconColor: '#43C463',
    unit: {
      singular: 'route',
      plural: 'routes',
    },
    href: '/records/routes',
  },
] satisfies RecordListItem[]
