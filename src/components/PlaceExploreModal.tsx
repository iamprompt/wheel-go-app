import { useTranslation } from 'react-i18next'
import { Image, Modal, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { BrandGradient } from './BrandGradient'
import { HorizontalDivider } from './HorizontalDivider'
import Button, { ButtonVariant } from './Button'
import { VerticalDivider } from './VerticalDivider'
import {
  AvailabilityStatus,
  FacilitiesAvailabilityStatus,
} from './FacilitiesAvailabilityStatus'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { ListCategoryIcon } from '~/const/category'
import { useGraphQL } from '~/utils/useGraphQL'
import { GetPlaceById } from '~/graphql/query/places'

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

  const { data } = useGraphQL(GetPlaceById, {
    id: placeId,
  })

  if (!data || !data.Place) {
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
                {data.Place.nameTH}
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
              <View
                style={{
                  flexDirection: 'row',
                  gap: 12,
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_BOLD,
                      fontSize: 24,
                    }}
                  >
                    5
                  </Text>
                  <MaterialIcons
                    name="star"
                    size={24}
                    color={COLORS.warning[300]}
                  />
                </View>
                <VerticalDivider height={24} />
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 12,
                      color: COLORS['french-vanilla'][500],
                    }}
                  >
                    {t('level.accessibility_level_description.1')}
                  </Text>
                </View>
              </View>
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
                {t('places.nearby_places_title')}
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  paddingVertical: 12,
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
                    fontFamily: FONTS.LSTH_REGULAR,
                    fontSize: 12,
                  }}
                >
                  {data.Place.nameTH}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}
