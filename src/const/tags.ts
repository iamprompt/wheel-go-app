import type { ComponentProps } from 'react'
import COLORS from '~/styles/colors'
import type { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface TagLabel {
  label: string
  icon: ComponentProps<typeof MaterialIcons>['name']
  color: string
}

export const TagsLabel: Record<string, TagLabel> = {
  building: {
    label: 'categories.building',
    icon: 'apartment',
    color: COLORS.info[400],
  },
  incident: {
    label: 'categories.incident',
    icon: 'warning',
    color: COLORS.error[400],
  },
  transport: {
    label: 'categories.transport',
    icon: 'directions_bus',
    color: COLORS.indigo[500],
  },
  cafe: {
    label: 'categories.cafe',
    icon: 'coffee',
    color: COLORS.toast[500],
  },
  food: {
    label: 'categories.food',
    icon: 'restaurant_menu',
    color: COLORS.pomegranate[400],
  },
  toilet: {
    label: 'categories.toilet',
    icon: 'wc',
    color: COLORS['fruit-punch'][600],
  },
  park: {
    label: 'categories.park',
    icon: 'park',
    color: COLORS.lime[400],
  },
  residence: {
    label: 'categories.residence',
    icon: 'cottage',
    color: COLORS.mint[600],
  },
  'curb-cut': {
    label: 'categories.curb-cut',
    icon: 'accessible',
    color: COLORS.magenta[500],
  },
}
