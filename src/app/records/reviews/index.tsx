import { Stack, useRouter } from 'expo-router'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PlaceItem } from '~/components/PlaceItem'
import { useAuth } from '~/context/useAuth'
import { useGetMyReviewsQuery } from '~/generated-types'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

export default function Page() {
  const { user } = useAuth()
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()

  const { data: reviewsData } = useGetMyReviewsQuery()

  const reviews = useMemo(() => {
    if (!reviewsData || !reviewsData.getReviews) {
      return []
    }
    return reviewsData.getReviews || []
  }, [reviewsData])

  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
        }}
      />

      <View
        style={{
          marginTop: insets.top + 44 + 16,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            gap: 12,
          }}
        >
          <View
            style={{
              padding: 12,
              backgroundColor: COLORS.warning[400],
              borderRadius: 35,
              width: 70,
              height: 70,
              borderColor: COLORS.white,
              borderWidth: 3,
              shadowColor: COLORS.black,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <MaterialIcons name="star" size={40} color={COLORS.white} />
          </View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 20,
              color: COLORS.warning[400],
            }}
          >
            {t('records.places_reviews')}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 14,
              color: COLORS['french-vanilla'][500],
            }}
          >
            3 {t('units.reviews')}
          </Text>
        </View>
        <View
          style={{
            marginTop: 24,
          }}
        >
          {reviews.map((review, i) => {
            if (!review) {
              return null
            }

            return (
              <PlaceItem
                key={review.id}
                name={review.place?.name?.th || ''}
                rating={review.rating?.overall || 0}
                category={review.place?.type}
                date={review.createdAt}
                onPress={() => {
                  console.log('onPress')
                  router.push(`/records/reviews/${review.id}`)
                }}
                borderTop={i === 0}
                borderBottom
              />
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}
