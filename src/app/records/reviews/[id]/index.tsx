import dayjs from 'dayjs'
import { Stack, useSearchParams } from 'expo-router'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { Image, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AccessibilityRatingOverall } from '~/components/AccessibilityRatingOverall'
import { CategoryLabel } from '~/components/CategoryLabel'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { VerticalDivider } from '~/components/VerticalDivider'
import { GetReviewById } from '~/graphql/query/reviews'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { useGraphQL } from '~/utils/useGraphQL'

function Page() {
  const { id } = useSearchParams<{ id: string }>()
  const { t } = useTranslation()
  const [contentOffsetY, setContentOffsetY] = useState(0)
  const insets = useSafeAreaInsets()

  const { data } = useGraphQL(!!id, GetReviewById, {
    id: id!,
  })

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

  console.log('review', review)

  if (!id || !data?.Review) {
    return null
  }

  return (
    <ScrollView
      onScroll={handlePageScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      style={[GlobalStyle.container]}
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

      {review?.place.image ? (
        <Image
          source={{
            uri: review?.place.image?.url || '',
            width: review?.place.image?.width || 0,
            height: review?.place.image?.height || 0,
          }}
          style={{
            width: '100%',
            height: insets.top + 44 + 150,
          }}
        />
      ) : (
        <View
          style={{
            width: '100%',
            height: insets.top + 44 + 150,
            backgroundColor: COLORS.soap[100],
          }}
        />
      )}

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
            th: review?.place.nameTH || '',
            en: review?.place.nameEN || '',
          })}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <CategoryLabel name={review?.place.category} />
          <VerticalDivider />
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 12,
              color: COLORS['french-vanilla'][500],
            }}
          >
            {dayjs(review?.createdAt).format('DD MMM YYYY')}
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

        <AccessibilityRatingOverall rating={review?.rating?.overall || 0} />

        <HorizontalDivider />

        <Text
          style={{
            fontFamily: FONTS.LSTH_REGULAR,
          }}
        >
          {review?.rating?.additionalComment}
        </Text>
      </View>
    </ScrollView>
  )
}

export default Page
