import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Platform, Pressable, Text, TextInput, View } from 'react-native'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import type { ImagePickerAsset } from 'expo-image-picker'
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker'
import axios, { isAxiosError } from 'axios'
import Constants from 'expo-constants'
import { AccessibilityRatingItemSelect } from '~/components/AccessibilityRatingItemSelect'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { VerticalDivider } from '~/components/VerticalDivider'
import { ListCategoryIcon } from '~/const/category'
import { FACILITIES } from '~/const/facility'
import { AccessibilityRating } from '~/const/reviews'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import Button from '~/components/Button'
import { useGraphQL } from '~/utils/useGraphQL'
import { GetPlaceById } from '~/graphql/query/places'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { getUserToken } from '~/utils/asyncStorage'
import { WheelGoGraphQL } from '~/utils/graphql'
import { CreateReview } from '~/graphql/mutation/reviews'

function Page() {
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()

  const router = useRouter()

  const { id: placeId } = useSearchParams<{ id: string }>()
  const { data: placeData } = useGraphQL(!!placeId, GetPlaceById, {
    id: placeId!,
  })

  const place = useMemo(() => {
    return placeData?.Place || null
  }, [placeData])

  const [overallRating, setOverallRating] = useState<number>(-1)
  const overallRatingDescription = useMemo(() => {
    return (
      AccessibilityRating[overallRating]?.description ||
      'reviews.accessibility_rating.description'
    )
  }, [overallRating])

  const [facilityRating, setFacilityRating] = useState<Record<string, number>>(
    {}
  )

  const [selectedImages, setSelectedImages] = useState<ImagePickerAsset[]>([])
  const [additionalComment, setAdditionalComment] = useState<string>('')

  const handlePickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: false,
    })

    if (!result.canceled) {
      console.log(JSON.stringify(result, null, 2))
      setSelectedImages((prev) => [...prev, result.assets[0]])
    }
  }

  console.log('selectedImages', selectedImages.length)

  const handleSubmit = async () => {
    console.log('submit')
    // TODO: Implement Upload Images to PayloadCMS
    const images = selectedImages.map((image) => {
      return {
        uri:
          Platform.OS === 'android'
            ? image.uri
            : image.uri.replace('file://', ''),
        width: image.width,
        height: image.height,
        name: image.fileName,
        type: image.type,
      }
    })

    const uploadResults = await Promise.all(
      images.map(async (image) => {
        const formData = new FormData()
        // @ts-expect-error - append image to form data
        formData.append('file', image)

        console.log('formData', JSON.stringify(formData, null, 2))

        try {
          const result = await axios.post(
            `${Constants.expoConfig?.extra?.WHEELGO_CMS_API}/media`,
            formData,
            {
              headers: {
                Authorization: await getUserToken(),
              },
            }
          )

          return result.data
        } catch (error) {
          if (isAxiosError(error)) {
            console.error(error.response?.data)
          }
          throw error
        }
      })
    )

    console.log(
      'uploadResults',
      uploadResults.map((result) => result.doc.id)
    )

    // TODO: Implement Submit Review
    const payloadResult = await WheelGoGraphQL(CreateReview, {
      input: {
        place: placeId,
        rating: {
          overall: overallRating,
          ...Object.entries(facilityRating)
            .filter(([, value]) => value !== -1)
            .reduce(
              (acc, [key, value]) => ({
                ...acc,
                [key]: value,
              }),
              {}
            ),
          comment: additionalComment,
          images: uploadResults.map((result) => ({
            image: result.doc.id,
          })),
        },
      },
    })

    console.log('payloadResult', payloadResult)

    router.replace(`/places/${placeId}`)
  }

  if (!place) {
    return null
  }

  return (
    <KeyboardAwareScrollView
      style={[GlobalStyle.container]}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
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
          gap: 24,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <Image
            source={ListCategoryIcon.building}
            style={{
              width: 32,
              height: 32,
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                fontSize: 16,
                marginBottom: 4,
              }}
            >
              {t('reviews.rate_this_place')}
            </Text>
            <Text
              style={{
                fontFamily: FONTS.LSTH_REGULAR,
                fontSize: 12,
                color: COLORS['french-vanilla'][500],
              }}
            >
              {getDisplayTextFromCurrentLanguage({
                en: place.nameEN,
                th: place.nameTH,
              })}
            </Text>
          </View>
        </View>
        <HorizontalDivider />

        <View>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'center',
              marginBottom: 12,
            }}
          >
            {Array.from({ length: 5 }).map((_, index) => {
              const isSelected = overallRating >= index + 1

              return (
                <Pressable
                  key={`star-${index}`}
                  onPress={() => {
                    if (overallRating === index + 1) {
                      setOverallRating(-1)
                      return
                    }

                    setOverallRating(index + 1)
                  }}
                >
                  <MaterialIcons
                    name={isSelected ? 'star' : 'star_outline'}
                    size={48}
                    color={
                      isSelected
                        ? COLORS.warning[300]
                        : COLORS['french-vanilla'][300]
                    }
                  />
                </Pressable>
              )
            })}
          </View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 12,
              color: COLORS['french-vanilla'][500],
              textAlign: 'center',
            }}
          >
            {t(overallRatingDescription)}
          </Text>
        </View>

        <HorizontalDivider />

        <View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 12,
              marginBottom: 12,
            }}
          >
            {t('reviews.accessibility_rating.criteria_title')}
          </Text>
          <View
            style={{
              gap: 8,
            }}
          >
            {Object.entries(AccessibilityRating).map(
              ([key, { description }]) => {
                return (
                  <View
                    key={`accessibility-rating-${key}`}
                    style={{
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 7,
                        alignItems: 'center',
                        width: 32,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONTS.LSTH_BOLD,
                          fontSize: 12,
                          width: 8,
                        }}
                      >
                        {key}
                      </Text>
                      <MaterialIcons
                        name={key === '0' ? 'star_outline' : 'star'}
                        size={16}
                        color={COLORS.magenta[500]}
                      />
                    </View>
                    <VerticalDivider height={16} />
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_REGULAR,
                        fontSize: 10,
                        color: COLORS['french-vanilla'][500],
                      }}
                    >
                      {t(description)}
                    </Text>
                  </View>
                )
              }
            )}
          </View>
        </View>

        <HorizontalDivider />

        <View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            {t('reviews.facility')}
          </Text>
          <View>
            {Object.entries(FACILITIES).map(([key, { label, icon }]) => {
              return (
                <View
                  key={`accessibility-rating-${key}`}
                  style={{
                    paddingVertical: 8,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                      marginBottom: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_BOLD,
                        fontSize: 12,
                      }}
                    >
                      {t(`facilities.${label}`)}
                    </Text>
                    <MaterialIcons
                      name="info_outline"
                      color={COLORS['french-vanilla'][300]}
                      size={16}
                    />
                  </View>
                  <AccessibilityRatingItemSelect
                    name={key}
                    icon={icon}
                    rating={facilityRating[key]}
                    onSelected={(rating) => {
                      if (rating === facilityRating[key]) {
                        setFacilityRating((prev) => ({
                          ...prev,
                          [key]: -1,
                        }))

                        return
                      }

                      setFacilityRating((prev) => ({
                        ...prev,
                        [key]: rating,
                      }))
                    }}
                  />
                </View>
              )
            })}
          </View>
        </View>
      </View>

      <HorizontalDivider height={12} />

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
          gap: 24,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            {t('reviews.details')}
          </Text>
          <View>
            <TextInput
              editable
              multiline
              placeholder={t('reviews.details_placeholder') || ''}
              numberOfLines={3}
              maxLength={200}
              value={additionalComment}
              onChangeText={setAdditionalComment}
              style={{
                borderWidth: 1,
                borderColor: COLORS['french-vanilla'][300],
                borderRadius: 12,
                paddingBottom: 16,
                paddingTop: 16,
                paddingHorizontal: 24,
                fontFamily: FONTS.LSTH_REGULAR,
                height: 120,
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.LSTH_REGULAR,
                fontSize: 10,
                color: COLORS['french-vanilla'][500],
                position: 'absolute',
                bottom: 12,
                right: 12,
              }}
            >
              / 200
            </Text>
          </View>
        </View>

        <HorizontalDivider />

        <View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            {t('reviews.images')}
          </Text>

          {selectedImages.length > 0 ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 16,
                paddingHorizontal: 24,
                borderWidth: 1,
                borderRadius: 12,
                borderStyle: 'dashed',
                borderColor: COLORS['french-vanilla'][300],
                marginBottom: 8,
              }}
            >
              {selectedImages.map((image, index) => {
                return (
                  <View
                    key={`selected-image-${index}`}
                    style={{
                      borderBottomColor: COLORS.soap[100],
                      borderBottomWidth: 1,
                      paddingVertical: 12,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        gap: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        source={{ uri: image.uri }}
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                        }}
                      />
                      <View
                        style={{
                          flex: 1,
                          gap: 4,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: FONTS.LSTH_BOLD,
                            fontSize: 14,
                          }}
                        >
                          {image.fileName || 'Untitled'}
                        </Text>
                      </View>
                    </View>
                    <Pressable
                      onPress={() => {
                        setSelectedImages((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }}
                    >
                      <MaterialIcons
                        name="remove"
                        size={24}
                        color={COLORS['french-vanilla'][300]}
                      />
                    </Pressable>
                  </View>
                )
              })}
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                  paddingVertical: 12,
                }}
                onPress={handlePickImage}
              >
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_BOLD,
                    fontSize: 12,
                    color: COLORS['french-vanilla'][500],
                    flex: 1,
                  }}
                >
                  {t('reviews.add_more_images') || 'Add more images'}
                </Text>
                <MaterialIcons
                  name="add"
                  size={24}
                  color={COLORS['french-vanilla'][300]}
                />
              </Pressable>
            </View>
          ) : (
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                height: 72,
                borderWidth: 1,
                borderRadius: 12,
                borderStyle: 'dashed',
                borderColor: COLORS['french-vanilla'][300],
                backgroundColor: COLORS.soap[100],
                marginBottom: 8,
              }}
              onPress={handlePickImage}
            >
              <MaterialIcons
                name="image"
                size={24}
                color={COLORS['french-vanilla'][500]}
              />
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 12,
                  color: COLORS.info[400],
                }}
              >
                {t('reviews.upload_images') || 'Upload images'}
              </Text>
            </Pressable>
          )}
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 10,
              color: COLORS['french-vanilla'][500],
            }}
          >
            {t('reviews.images_limit_description')}
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 24,
          paddingBottom: insets.bottom + 24,
        }}
      >
        <Button label={t('reviews.submit_review')} onPress={handleSubmit} />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Page
