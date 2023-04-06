import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button, { ButtonVariant } from '~/components/Button'
import { HeaderLogo } from '~/components/HeaderLogo'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { ReviewHereButton } from '~/components/ReviewHereButton'
import { ReviewItem } from '~/components/ReviewItem'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'

function Page() {
  const router = useRouter()
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()
  const { id: placeId } = useSearchParams<{ id: string }>()
  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          title: 'Reviews',
          headerShown: true,
        }}
      />

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}
      >
        <ReviewHereButton />
      </View>

      <HorizontalDivider height={12} />

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
          paddingBottom: 24 + insets.bottom,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: 8,
            marginBottom: 16,
          }}
        >
          <HeaderLogo />
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 20,
              marginBottom: -8,
            }}
          >
            {t('places.review_text')}
          </Text>
        </View>

        <View
          style={{
            borderColor: COLORS.soap[100],
            borderBottomWidth: 1,
            paddingVertical: 24,
          }}
        >
          <ReviewItem
            reviewer="John Doe"
            additionalComment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
            overallRating={5}
            date="2021-01-01"
            facilityTags={[
              'cleanliness',
              'nice_facilities',
              'safety',
              'great_service',
            ]}
            officialComment={{
              date: '2021-01-01',
              isFlagged: true,
              comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.',
            }}
          />
        </View>
        <View
          style={{
            borderColor: COLORS.soap[100],
            borderBottomWidth: 1,
            paddingVertical: 24,
          }}
        >
          <ReviewItem
            reviewer="John Doe"
            additionalComment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
            overallRating={5}
            date="2021-01-01"
            facilityRatings={{
              ramp: 5,
              assistance: 5,
              elevator: 5,
              toilet: 5,
              parking: 4,
              surface: 5,
            }}
            officialComment={{
              date: '2021-01-01',
              isFlagged: false,
              comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.',
            }}
          />
        </View>
        <Button
          label={t('places.see_all_reviews')}
          variant={ButtonVariant.Secondary}
          onPress={() => {
            console.log('see all reviews')
            router.push(`/places/${placeId}/reviews`)
          }}
        />
      </View>
    </ScrollView>
  )
}

export default Page
