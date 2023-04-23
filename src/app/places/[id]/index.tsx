import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import {
  Platform,
  Pressable,
  ScrollView,
  Share,
  Text,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Linking from 'expo-linking'
import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { IconActionButton } from '~/components/IconActionButton'
import { ListCategoryIcon } from '~/const/category'
import { BrandGradient } from '~/components/BrandGradient'
import { FacilitiesAvailabilityStatus } from '~/components/FacilitiesAvailabilityStatus'
import { AccessibilityRatingOverall } from '~/components/AccessibilityRatingOverall'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { AccessibilityRatingContainer } from '~/components/AccessibilityRatingContainer'
import { ReviewHereButton } from '~/components/ReviewHereButton'
import { HeaderLogo } from '~/components/HeaderLogo'
import Button, { ButtonVariant } from '~/components/Button'
import { ImageWithFallback } from '~/components/ImageWithFallback'
import {
  useGetPlaceByIdQuery,
  useGetReviewsByPlaceIdQuery,
} from '~/generated-types'
import { FACILITIES } from '~/const/facility'
import { ReviewItem } from '~/components/ReviewItem'

function Page() {
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()
  const { id } = useSearchParams<{ id: string }>()
  const router = useRouter()

  const { data } = useGetPlaceByIdQuery({
    variables: {
      id: id!,
    },
  })

  const [contentOffsetY, setContentOffsetY] = useState(0)
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
      en: data?.getPlaceById?.name?.en || '',
      th: data?.getPlaceById?.name?.th || '',
    })
  }, [contentOffsetY, data?.getPlaceById?.name])

  const { data: reviewsData } = useGetReviewsByPlaceIdQuery({
    variables: {
      placeId: id!,
    },
  })

  const { name, address, type, images, metadata, location } =
    data?.getPlaceById || {}

  if (!id || !data?.getPlaceById) {
    return null
  }

  return (
    <ScrollView
      onScroll={handlePageScroll}
      scrollEventThrottle={16}
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

      <StatusBar style="auto" />

      <View
        style={{
          paddingBottom: insets.bottom + 16,
        }}
      >
        <ImageWithFallback
          src={images?.[0]?.url}
          width="100%"
          height={insets.top + 44 + 150}
        />

        <BrandGradient
          style={{
            padding: 16,
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
                source={ListCategoryIcon[type!]}
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
                {t(`categories.${type}`)}
              </Text>
            </View>

            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                fontSize: 20,
                color: COLORS.white,
              }}
            >
              {getDisplayTextFromCurrentLanguage({
                en: name?.en,
                th: name?.th,
              })}
            </Text>
          </View>
        </BrandGradient>
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          {address ? (
            <View
              style={{
                paddingVertical: 24,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.soap[100],
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 16,
                  marginBottom: 8,
                }}
              >
                {t('places.address')}
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.LSTH_REGULAR,
                  fontSize: 12,
                  color: COLORS['french-vanilla'][500],
                }}
              >
                {getDisplayTextFromCurrentLanguage({
                  en: address.en || '',
                  th: address.th || '',
                })}
              </Text>
            </View>
          ) : null}
          <View
            style={{
              paddingVertical: 24,
              flexDirection: 'row',
              gap: 8,
            }}
          >
            <IconActionButton
              label={t('places.show_on_map')}
              icon="place"
              onPress={() => {
                const address = [location?.lat, location?.lng].join(',')
                const url = Platform.select({
                  ios: `maps:0,0?q=${address}`,
                  android: `geo:0,0?q=${address}`,
                })

                url && Linking.openURL(url)
              }}
            />
            <IconActionButton
              label={t('places.contact')}
              icon="call"
              onPress={() => {
                metadata?.phone && Linking.openURL(`tel:${metadata.phone}`)
              }}
            />
            <IconActionButton
              label={t('places.website')}
              icon="link"
              onPress={() => {
                metadata?.website && Linking.openURL(metadata.website)
              }}
            />
            <IconActionButton
              label={t('places.share')}
              icon="share"
              onPress={async () => {
                const result = await Share.share({
                  message: metadata?.website || '',
                })

                result.action === Share.sharedAction && console.log('shared')
              }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: COLORS.soap[100],
            height: 12,
            width: '100%',
          }}
        />
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 24,
            gap: 16,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 16,
                  flex: 1,
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {t('places.accessibility_rating_title')}
              </Text>
              <Pressable>
                <Text
                  style={{
                    color: COLORS.info[400],
                    fontFamily: FONTS.LSTH_REGULAR,
                    fontSize: 12,
                  }}
                >
                  {t('places.see_reviews')}
                </Text>
              </Pressable>
            </View>
            <AccessibilityRatingOverall
              rating={data.getRatingSummaryByPlaceId.overall}
              reviews={data.getRatingSummaryByPlaceId.reviewCount || 0}
            />
            <AccessibilityRatingContainer
              style={{
                marginTop: 24,
              }}
              ratings={{
                RAMP: data.getRatingSummaryByPlaceId.facilities.RAMP?.rating,
                ASSISTANCE:
                  data.getRatingSummaryByPlaceId.facilities.ASSISTANCE?.rating,
                ELEVATOR:
                  data.getRatingSummaryByPlaceId.facilities.ELEVATOR?.rating,
                TOILET:
                  data.getRatingSummaryByPlaceId.facilities.TOILET?.rating,
                PARKING:
                  data.getRatingSummaryByPlaceId.facilities.PARKING?.rating,
                SURFACE:
                  data.getRatingSummaryByPlaceId.facilities.SURFACE?.rating,
              }}
            />
          </View>

          <HorizontalDivider />

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 16,
                  flex: 1,
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {t('places.facilities_title')}
              </Text>
              <Pressable>
                <Text
                  style={{
                    color: COLORS.info[400],
                    fontFamily: FONTS.LSTH_REGULAR,
                    fontSize: 12,
                  }}
                >
                  {t('places.see_more_details')}
                </Text>
              </Pressable>
            </View>
            <FacilitiesAvailabilityStatus
              ramp={data.getRatingSummaryByPlaceId.facilities.RAMP?.status}
              assistance={
                data.getRatingSummaryByPlaceId.facilities.ASSISTANCE?.status
              }
              elevator={
                data.getRatingSummaryByPlaceId.facilities.ELEVATOR?.status
              }
              toilet={data.getRatingSummaryByPlaceId.facilities.TOILET?.status}
              parking={
                data.getRatingSummaryByPlaceId.facilities.PARKING?.status
              }
              surface={
                data.getRatingSummaryByPlaceId.facilities.SURFACE?.status
              }
            />
          </View>

          <HorizontalDivider />

          <ReviewHereButton placeId={id} />
        </View>

        <HorizontalDivider height={12} />

        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 24,
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
          {reviewsData?.getReviewsByPlaceId?.map((review) => {
            const { id, user, comment, rating, official, images, createdAt } =
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
                    isFlagged: official.isFlagged || false,
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
                  reviewer={`${user?.firstname} ${user?.lastname}`}
                  additionalComment={comment || ''}
                  overallRating={rating?.overall || 0}
                  date={createdAt}
                  facilityRatings={facilityRatings}
                  officialComment={officialComment}
                  images={
                    images?.map(({ url, id }) => ({
                      id: id!,
                      url: url!,
                    })) || []
                  }
                />
              </View>
            )
          })}
          <Button
            label={t('reviews.see_all_reviews')}
            variant={ButtonVariant.Secondary}
            onPress={() => {
              console.log('see all reviews')
              router.push(`/places/${id}/reviews`)
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Page
