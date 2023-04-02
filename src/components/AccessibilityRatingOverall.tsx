import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { VerticalDivider } from './VerticalDivider'
import COLORS from '~/styles/colors'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import FONTS from '~/styles/fonts'

interface AccessibilityRatingOverallProps {
  rating: number
  reviews?: number
}

export function AccessibilityRatingOverall({
  rating,
  reviews,
}: AccessibilityRatingOverallProps) {
  const { t } = useTranslation()

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          paddingHorizontal: reviews ? 24 : 0,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 24,
            }}
          >
            {rating}
          </Text>
          <MaterialIcons name="star" size={24} color={COLORS.warning[300]} />
        </View>
        {reviews ? (
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 12,
              color: COLORS['french-vanilla'][500],
            }}
          >
            {reviews} {t('units.reviews')}
          </Text>
        ) : null}
      </View>
      <VerticalDivider height={reviews ? 40 : 24} />
      <View>
        <Text
          style={{
            fontFamily: FONTS.LSTH_REGULAR,
            fontSize: 12,
            color: COLORS['french-vanilla'][500],
          }}
        >
          {t('level.accessibility_level_description.1')}
        </Text>
      </View>
    </View>
  )
}
