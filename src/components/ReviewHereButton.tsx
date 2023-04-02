import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

export function ReviewHereButton() {
  const { t } = useTranslation()

  return (
    <View
      style={{
        borderRadius: 12,
        gap: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS['french-vanilla'][300],
        borderWidth: 1,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.LSTH_BOLD,
          fontSize: 16,
        }}
      >
        {t('places.review_here')}
      </Text>

      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <MaterialIcons
            name="star_outline"
            size={24}
            color={COLORS['french-vanilla'][300]}
            key={index}
          />
        ))}
      </View>
    </View>
  )
}
