import type { ComponentProps } from 'react'
import COLORS from '~/styles/colors'
import type { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface Badge {
  label: string
  icon: ComponentProps<typeof MaterialIcons>['name']
  color: string
}

export const BADGES: Record<string, Badge> = {
  coming_soon: {
    label: 'badges.coming_soon',
    icon: 'question_mark',
    color: COLORS['french-vanilla'][200],
  },
  novice_navigator: {
    label: 'badges.novice_navigator',
    icon: 'navigation',
    color: COLORS.cantaloupe[300],
  },
  skillful_navigator: {
    label: 'badges.skillful_navigator',
    icon: 'navigation',
    color: COLORS.indigo[400],
  },
  master_navigator: {
    label: 'badges.master_navigator',
    icon: 'navigation',
    color: COLORS.kiwi[400],
  },
  novice_reviewer: {
    label: 'badges.novice_reviewer',
    icon: 'rate_review',
    color: COLORS.cantaloupe[300],
  },
  skillful_reviewer: {
    label: 'badges.skillful_reviewer',
    icon: 'rate_review',
    color: COLORS.indigo[400],
  },
  master_reviewer: {
    label: 'badges.master_reviewer',
    icon: 'rate_review',
    color: COLORS.kiwi[400],
  },
}
