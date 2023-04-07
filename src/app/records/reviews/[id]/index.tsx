import { Image } from 'expo-image'
import { Stack, useSearchParams } from 'expo-router'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AccessibilityRatingOverall } from '~/components/AccessibilityRatingOverall'
import { AccessibilityRatingTag } from '~/components/AccessibilityRatingTag'
import { CategoryLabel } from '~/components/CategoryLabel'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { ImageWithFallback } from '~/components/ImageWithFallback'
import { ReviewOfficialComment } from '~/components/ReviewOfficialComment'
import { VerticalDivider } from '~/components/VerticalDivider'
import { FACILITIES } from '~/const/facility'
import { GetReviewById } from '~/graphql/query/reviews'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { format } from '~/utils/dayjs'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { useGraphQL } from '~/utils/useGraphQL'

function Page() {
  const { id } = useSearchParams<{ id: string }>()
  const { t } = useTranslation()
  const [contentOffsetY, setContentOffsetY] = useState(0)
  const insets = useSafeAreaInsets()

  const { data = {} } = useGraphQL(!!id, GetReviewById, {
    id: id!,
  })
  const { Review } = data

  const review = useMemo(() => {
    if (!data?.Review) {
      return null
    }

    return data?.Review
  }, [])

  const handlePageScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setContentOffsetY(e.nativeEvent.contentOffset.y)
  }

  const headerColor = useMemo(() => {
    if (contentOffsetY < insets.top + 44) {
      return 'transparent'
    }

    return COLORS.white
  }, [contentOffsetY])

  const headerTitle = useMemo(() => {
    if (contentOffsetY < insets.top + 44) {
      return ''
    }

    return getDisplayTextFromCurrentLanguage({
      th: review?.place.nameTH || '',
      en: review?.place.nameEN || '',
    })
  }, [contentOffsetY])

  const { createdAt, place, rating, official } = Review || {}

  const shouldShowOfficialComment = useMemo(() => {
    if (!official) {
      return false
    }

    return !!official.comment || !!official.timestamp
  }, [official])

  if (!id || !data?.Review) {
    return null
  }

  return (
    <ScrollView
      onScroll={handlePageScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      style={[GlobalStyle.container]}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: insets.bottom,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: headerTitle,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: headerColor,
          },
        }}
      />

      <ImageWithFallback
        src={place?.image?.url}
        width="100%"
        height={insets.top + 44 + 150}
      />

      <View
        style={{
          paddingVertical: 24,
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_BOLD,
            fontSize: 20,
            marginBottom: 8,
          }}
        >
          {getDisplayTextFromCurrentLanguage({
            th: place?.nameTH || '',
            en: place?.nameEN || '',
          })}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <CategoryLabel name={place?.category} />
          <VerticalDivider />
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 12,
              color: COLORS['french-vanilla'][500],
            }}
          >
            {format(createdAt)}
          </Text>
        </View>
      </View>
      <HorizontalDivider height={8} />
      <View
        style={{
          paddingVertical: 24,
          paddingHorizontal: 16,
          gap: 24,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_BOLD,
            fontSize: 16,
          }}
        >
          {t('records.reviews.my_review')}
        </Text>

        <AccessibilityRatingOverall rating={rating?.overall || 0} />

        {rating ? (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            {Object.keys(FACILITIES).map((facility) => {
              return (
                <AccessibilityRatingTag
                  key={facility}
                  type={facility as keyof typeof FACILITIES}
                  rating={rating[facility as keyof typeof FACILITIES] || 0}
                />
              )
            })}
          </View>
        ) : null}

        <HorizontalDivider />

        {rating?.comment ? (
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
            }}
          >
            {rating?.comment}
          </Text>
        ) : null}

        {rating?.images?.length ? (
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
            }}
          >
            {rating?.images?.map(({ image, id }) => {
              if (!image) {
                return null
              }

              return (
                <Image
                  key={id}
                  source={image?.url}
                  style={{
                    flex: 1,
                    height: 96,
                    borderRadius: 8,
                    borderColor: COLORS['french-vanilla'][500],
                    borderWidth: 1,
                    aspectRatio: 4 / 3,
                  }}
                />
              )
            })}
          </View>
        ) : null}

        {shouldShowOfficialComment ? (
          <ReviewOfficialComment
            date={official?.timestamp}
            comment={official?.comment || ''}
            isFlagged={official?.flagged || false}
          />
        ) : null}
      </View>
    </ScrollView>
  )
}

export default Page
