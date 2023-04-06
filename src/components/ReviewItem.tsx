import { Text, View } from 'react-native'
import { AccessibilityRatingOverall } from './AccessibilityRatingOverall'
import { ReviewOfficialComment } from './ReviewOfficialComment'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { format } from '~/utils/dayjs'

interface ReviewItemProps {
  reviewer: string
  date: string
  overallRating: number
  additionalComment?: string
  officialComment: Parameters<typeof ReviewOfficialComment>[0]
}

export function ReviewItem({
  reviewer,
  date,
  overallRating = 0,
  officialComment,
  additionalComment,
}: ReviewItemProps) {
  return (
    <View
      style={{
        gap: 12,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_BOLD,
            fontSize: 12,
          }}
        >
          {reviewer}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.LSTH_REGULAR,
            fontSize: 12,
            color: COLORS['french-vanilla'][500],
          }}
        >
          {format(date)}
        </Text>
      </View>
      <AccessibilityRatingOverall rating={overallRating} />
      <View>
        <Text
          style={{
            fontFamily: FONTS.LSTH_REGULAR,
            fontSize: 12,
            color: COLORS['french-vanilla'][500],
          }}
        >
          {additionalComment}
        </Text>
      </View>
      <ReviewOfficialComment {...officialComment} />
    </View>
  )
}
