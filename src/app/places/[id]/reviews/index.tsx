import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderLogo } from '~/components/HeaderLogo'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { ReviewHereButton } from '~/components/ReviewHereButton'
import { ReviewItem } from '~/components/ReviewItem'
import { FACILITIES } from '~/const/facility'
import { GetReviewsByPlaceId } from '~/graphql/query/reviews'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { useGraphQL } from '~/utils/useGraphQL'

function Page() {
  const router = useRouter()
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()
  const { id: placeId } = useSearchParams<{ id: string }>()

  const { data } = useGraphQL(!!placeId, GetReviewsByPlaceId, {
    placeId: placeId!,
  })

  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          title: 'Reviews',
          headerShown: true,
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.push(`/places/${placeId}/reviews/new`)
              }}
            >
              <MaterialIcons name="add" size={24} />
            </Pressable>
          ),
        }}
      />

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}
      >
        <ReviewHereButton placeId={placeId!} />
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

        {data?.Reviews?.docs?.map((review) => {
          const { id, user, comment, rating, official, createdAt } =
            review || {}

          const Facilities = Object.keys(FACILITIES)
          const isFacilityRating = Facilities.some(
            (facility) => rating?.[facility as keyof typeof rating]
          )

          const facilityRatings = isFacilityRating
            ? Facilities.reduce((acc, key) => {
                const rate = rating?.[key as keyof typeof rating]

                return {
                  ...acc,
                  [key]: rate,
                }
              }, {})
            : undefined

          const officialComment =
            official && official.comment && official.timestamp
              ? {
                  date: official.timestamp,
                  isFlagged: official.flagged || false,
                  comment: official.comment,
                }
              : undefined

          return (
            <View
              key={id}
              style={{
                borderColor: COLORS.soap[100],
                borderBottomWidth: 1,
                paddingVertical: 24,
              }}
            >
              <ReviewItem
                reviewer={`${user?.firstName} ${user?.lastName}`}
                additionalComment={rating?.comment || comment || ''}
                overallRating={rating?.overall || 0}
                date={createdAt}
                facilityRatings={facilityRatings}
                officialComment={officialComment}
                images={
                  rating?.images?.map(({ image, id }) => ({
                    id: id!,
                    url: image!.url!,
                  })) || []
                }
              />
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Page
