import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { TagsLabel } from '~/const/tags'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface CategoryLabelProps {
  name?: keyof typeof TagsLabel
}

export function CategoryLabel({ name }: CategoryLabelProps) {
  const { t } = useTranslation()

  if (!name) {
    return null
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: COLORS['french-vanilla'][300],
        borderWidth: 1,
        borderRadius: 8,
      }}
    >
      <MaterialIcons
        name={TagsLabel[name].icon}
        color={TagsLabel[name].color}
        size={16}
      />
      <Text
        style={{
          fontFamily: FONTS.LSTH_BOLD,
          fontSize: 12,
          color: TagsLabel[name].color,
        }}
      >
        {t(TagsLabel[name].label)}
      </Text>
    </View>
  )
}
