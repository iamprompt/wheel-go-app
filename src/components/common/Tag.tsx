import type { ComponentProps } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface TagProps {
  label: string
  height?: number | string
  width?: number | string
  fullWidth?: boolean
  icon?: ComponentProps<typeof MaterialIcons>['name']
  iconColor?: string
  iconSize?: number
  iconPosition?: 'left' | 'right'
  backgroundColor?: string
  textColor?: string
  textSize?: number
  borderColor?: string
  borderWidth?: number
  borderRadius?: number
}

export function Tag({
  height = 48,
  width,
  fullWidth,
  label,
  icon,
  iconColor,
  iconSize,
  iconPosition = 'right',
  backgroundColor = COLORS['french-vanilla'][100],
  textColor,
  textSize = 14,
  borderColor = COLORS['french-vanilla'][300],
  borderWidth = 1,
  borderRadius = 12,
}: TagProps) {
  const { t } = useTranslation()

  const IconElement = icon ? (
    <MaterialIcons
      name={icon}
      size={iconSize || textSize}
      color={iconColor || textColor || COLORS['french-vanilla'][300]}
    />
  ) : null

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor,
        height,
        width,
        flex: fullWidth ? 1 : 0,
        borderColor,
        borderWidth,
        borderRadius,
        gap: 4,
      }}
    >
      {iconPosition === 'left' && IconElement}
      <Text
        style={{
          fontFamily: FONTS.LSTH_BOLD,
          fontSize: textSize,
          color: textColor || COLORS['french-vanilla'][300],
        }}
      >
        {t(label)}
      </Text>
      {iconPosition === 'right' && IconElement}
    </View>
  )
}
