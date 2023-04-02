import { Image, Pressable, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { BrandGradient } from './BrandGradient'
import { ListCategoryIcon } from '~/const/category'
import FONTS from '~/styles/fonts'
import COLORS from '~/styles/colors'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface NearbyPlaceBlockProps {
  onPress?: () => void
  category: keyof typeof ListCategoryIcon
  name: string
}

export function NearbyPlaceBlock({
  onPress,
  category,
  name,
}: NearbyPlaceBlockProps) {
  const { t } = useTranslation()

  return (
    <Pressable onPress={onPress}>
      <BrandGradient
        style={{
          padding: 16,
          flexDirection: 'row',
          width: '100%',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
            }}
          >
            <Image
              source={ListCategoryIcon[category]}
              style={{
                width: 24,
                height: 24,
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                fontSize: 14,
                color: COLORS.white,
              }}
            >
              {t(`categories.${category}`)}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 20,
              color: COLORS.white,
            }}
          >
            {name}
          </Text>
        </View>
        <View>
          <MaterialIcons name="info_outline" size={24} color={COLORS.white} />
        </View>
      </BrandGradient>
    </Pressable>
  )
}
