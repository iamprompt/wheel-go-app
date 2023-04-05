import { Stack, useSearchParams } from 'expo-router'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  Share,
  Text,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Linking from 'expo-linking'
import dayjs from 'dayjs'
import { GetPlaceById } from '~/graphql/query/places'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { useGraphQL } from '~/utils/useGraphQL'
import { IconActionButton } from '~/components/IconActionButton'
import { ListCategoryIcon } from '~/const/category'
import { BrandGradient } from '~/components/BrandGradient'
import {
  AvailabilityStatus,
  FacilitiesAvailabilityStatus,
} from '~/components/FacilitiesAvailabilityStatus'
import { AccessibilityRatingOverall } from '~/components/AccessibilityRatingOverall'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { AccessibilityRatingContainer } from '~/components/AccessibilityRatingContainer'
import { ReviewHereButton } from '~/components/ReviewHereButton'
import { HeaderLogo } from '~/components/HeaderLogo'
import Button, { ButtonVariant } from '~/components/Button'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

function Page() {
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()
  const { id } = useSearchParams<{ id: string }>()
  const { data } = useGraphQL(true, GetPlaceById, {
    id: id!,
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
      en: data?.Place?.nameEN || '',
      th: data?.Place?.nameTH || '',
    })
  }, [contentOffsetY, data?.Place?.nameEN, data?.Place?.nameTH])

  console.log(data)

  if (!id || !data?.Place) {
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

      <View
        style={{
          paddingBottom: insets.bottom + 16,
        }}
      >
        <Image
          source={{
            uri: data?.Place?.image?.url || '',
            width: data?.Place?.image?.width || 0,
            height: data?.Place?.image?.height || 0,
          }}
          style={{
            width: '100%',
            height: insets.top + 44 + 100,
          }}
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
                source={ListCategoryIcon[data.Place.category]}
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
                {t(`categories.${data.Place.category}`)}
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
                en: data?.Place?.nameEN || '',
                th: data?.Place?.nameTH || '',
              })}
            </Text>
          </View>
        </BrandGradient>
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
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
                en: data?.Place?.placeAddressEN || '',
                th: data?.Place?.placeAddressTH || '',
              })}
            </Text>
          </View>
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
                const address = data.Place?.geolocation?.reverse().join(',')
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
                data.Place?.phone && Linking.openURL(`tel:${data.Place?.phone}`)
              }}
            />
            <IconActionButton
              label={t('places.website')}
              icon="link"
              onPress={() => {
                data.Place?.website && Linking.openURL(data.Place.website)
              }}
            />
            <IconActionButton
              label={t('places.share')}
              icon="share"
              onPress={async () => {
                const result = await Share.share({
                  message: data.Place?.website || '',
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
            <AccessibilityRatingOverall rating={5} reviews={10} />
            <AccessibilityRatingContainer
              style={{
                marginTop: 24,
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
              ramp={AvailabilityStatus.AVAILABLE}
              assistance={AvailabilityStatus.UNAVAILABLE}
              elevator={AvailabilityStatus.AVAILABLE}
              toilet={AvailabilityStatus.AVAILABLE}
              parking={AvailabilityStatus.WARNING}
              surface={AvailabilityStatus.AVAILABLE}
            />
          </View>

          <HorizontalDivider />

          <ReviewHereButton />
        </View>

        <HorizontalDivider height={12} />
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 24,
            gap: 16,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              gap: 8,
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
              gap: 12,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 12,
                }}
              >
                N*****m
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.LSTH_REGULAR,
                  fontSize: 12,
                  color: COLORS['french-vanilla'][500],
                }}
              >
                {dayjs('2023-04-02').format('DD MMM YYYY')}
              </Text>
            </View>
            <AccessibilityRatingOverall rating={5} />
            <View>
              <Text
                style={{
                  fontFamily: FONTS.LSTH_REGULAR,
                  fontSize: 12,
                  color: COLORS['french-vanilla'][500],
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </Text>
            </View>
            <View
              style={{
                borderRadius: 8,
                borderColor: COLORS['french-vanilla'][300],
                borderWidth: 1,
                padding: 12,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <MaterialIcons
                    name="local_police"
                    size={20}
                    color={COLORS.info[500]}
                  />
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_BOLD,
                      fontSize: 12,
                    }}
                  >
                    {t('reviews.additional_official_comment')}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_REGULAR,
                    fontSize: 12,
                    color: COLORS['french-vanilla'][500],
                  }}
                >
                  {dayjs('2023-04-02').format('DD MMM YYYY')}
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: FONTS.LSTH_REGULAR,
                  fontSize: 12,
                  color: COLORS['french-vanilla'][500],
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Text>
            </View>
          </View>

          <Button
            label={t('places.see_all_reviews')}
            variant={ButtonVariant.Secondary}
            onPress={() => {
              console.log('see all reviews')
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Page
