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
    label: 'tags.building',
    icon: 'apartment',
    color: COLORS.info[400],
  },
  incident: {
    label: 'tags.incident',
    icon: 'warning',
    color: COLORS.error[400],
  },
}
