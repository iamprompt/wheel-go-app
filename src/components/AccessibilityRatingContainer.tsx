import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import type { ComponentProps } from 'react'
import { AccessibilityRatingItem } from './AccessibilityRatingItem'
import { FACILITIES } from '~/const/facility'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'

export function AccessibilityRatingContainer({
  ...props
}: Omit<ComponentProps<typeof View>, 'children'>) {
  const { t } = useTranslation()

  return (
    <View {...props}>
      {Object.entries(FACILITIES).map(([key, { label, icon }]) => {
        return (
          <View
            key={`accessibility-rating-${key}`}
            style={{
              paddingVertical: 8,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 12,
                }}
              >
                {t(`facilities.${label}`)}
              </Text>
              <MaterialIcons
                name="info_outline"
                color={COLORS['french-vanilla'][300]}
                size={16}
              />
            </View>
            <AccessibilityRatingItem name={key} icon={icon} rating={3.5} />
          </View>
        )
      })}
    </View>
  )
}
