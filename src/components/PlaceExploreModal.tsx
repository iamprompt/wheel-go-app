import { useTranslation } from 'react-i18next'
import { Image, Modal, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { useMemo } from 'react'
import { BrandGradient } from './BrandGradient'
import { HorizontalDivider } from './HorizontalDivider'
import Button, { ButtonVariant } from './Button'
import {
  AvailabilityStatus,
  FacilitiesAvailabilityStatus,
} from './FacilitiesAvailabilityStatus'
import { AccessibilityRatingOverall } from './AccessibilityRatingOverall'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { ListCategoryIcon } from '~/const/category'
import { useGraphQL } from '~/utils/useGraphQL'
import {
  GetNearbyPlacesFromLocation,
  GetPlaceById,
} from '~/graphql/query/places'
import { getNearestPlaces } from '~/utils/geo'

interface PlaceExploreModalProps {
  isVisible: boolean
  onClose: () => void
  placeId: string
}

export function PlaceExploreModal({
  isVisible,
  onClose,
  placeId,
}: PlaceExploreModalProps) {
  const { t } = useTranslation()
  const router = useRouter()

  const { data: placeData } = useGraphQL(true, GetPlaceById, {
    id: placeId,
  })

  const { data: nearbyPlacesData = {} } = useGraphQL(
    !!placeData?.Place,
    GetNearbyPlacesFromLocation,
    {
      lat: placeData?.Place?.geolocation?.[1] || 0,
      lng: placeData?.Place?.geolocation?.[0] || 0,
      distance: 5000,
      limit: 1000,
    }
  )

  const nearbyPlaces = useMemo(() => {
    if (!nearbyPlacesData?.Places || !placeData?.Place?.geolocation) {
      return []
    }

    return (
      getNearestPlaces(nearbyPlacesData, {
        lat: placeData.Place.geolocation[1],
        lng: placeData.Place.geolocation[0],
        limit: 3,
        exclude: [placeData.Place.id!],
      }) || []
    )
  }, [nearbyPlacesData])

  console.log(JSON.stringify(nearbyPlaces[0], null, 2))

  if (!placeData || !placeData.Place) {
    return null
  }

  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: COLORS.magenta[600],
          opacity: 0.6,
          flex: 1,
        }}
      />
      <View
        style={{
          padding: 16,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            // paddingHorizontal: 16,
            // paddingVertical: 24,
            borderRadius: 12,
            width: '100%',
            maxWidth: 512,
          }}
        >
          <BrandGradient
            style={{
              padding: 16,
              flexDirection: 'row',
              width: '100%',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 8,
                }}
              >
                <Image
                  source={ListCategoryIcon[placeData.Place.category]}
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
                  {t(`categories.${placeData.Place.category}`)}
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 20,
                  color: COLORS.white,
                }}
              >
                {placeData.Place.nameTH}
              </Text>
            </View>
            <View
              style={{
                flexShrink: 0,
              }}
            >
              <MaterialIcons
                name="close"
                size={24}
                color={COLORS.white}
                onPress={onClose}
              />
            </View>
          </BrandGradient>

          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 24,
              gap: 12,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 14,
                }}
              >
                {t('level.accessibility_level')}
              </Text>
              <AccessibilityRatingOverall rating={5} />
            </View>
            <HorizontalDivider />
            <View>
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 14,
                }}
              >
                {t('places.facilities_title')}
              </Text>
              <FacilitiesAvailabilityStatus
                ramp={AvailabilityStatus.AVAILABLE}
                assistance={AvailabilityStatus.UNAVAILABLE}
                elevator={AvailabilityStatus.AVAILABLE}
                toilet={AvailabilityStatus.AVAILABLE}
                parking={AvailabilityStatus.WARNING}
                surface={AvailabilityStatus.AVAILABLE}
              />
            </View>
            <View>
              <Button
                variant={ButtonVariant.Secondary}
                label={t('places.see_place_details')}
                onPress={() => {
                  onClose()
                  router.push(`/places/${placeId}`)
                }}
              />
            </View>
          </View>
          <HorizontalDivider height={4} />
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 24,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 14,
                }}
              >
                {t('places.nearby_places')}
              </Text>
            </View>

            <View>
              {nearbyPlaces.map((place, i) => {
                if (!place) {
                  return null
                }

                return (
                  <View
                    key={place.id}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 12,
                      justifyContent: 'space-between',
                      borderColor: COLORS.soap[100],
                      borderBottomWidth: i === nearbyPlaces.length - 1 ? 0 : 1,
                      gap: 16,
                    }}
                  >
                    <View
                      style={{
                        gap: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}
                    >
                      <Image
                        source={ListCategoryIcon[place.category!]}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: FONTS.LSTH_REGULAR,
                          fontSize: 12,
                          flex: 1,
                        }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {place.nameTH}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: FONTS.LSTH_REGULAR,
                          fontSize: 10,
                          color: COLORS['french-vanilla'][500],
                        }}
                      >
                        {place.distance} {t('units.meters')}
                      </Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}
