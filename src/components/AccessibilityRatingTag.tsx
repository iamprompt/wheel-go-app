import { Tag } from './common/Tag'
import COLORS from '~/styles/colors'
import { FACILITIES } from '~/const/facility'

interface AccessibilityRatingTagProps {
  type: keyof typeof FACILITIES
  rating: number
}

export function AccessibilityRatingTag({
  type,
  rating,
}: AccessibilityRatingTagProps) {
  return (
    <Tag
      label={rating.toString()}
      icon={FACILITIES[type].icon}
      iconPosition="left"
      iconSize={16}
      height={28}
      textColor={COLORS.magenta[500]}
      fullWidth
    />
  )
}
