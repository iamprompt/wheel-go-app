import { Stack } from 'expo-router'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
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

function Page() {
  const { t } = useTranslation()

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

  return (
    <KeyboardAwareScrollView
      style={[GlobalStyle.container]}
      bounces={false}
      extraScrollHeight={100}
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
              Office of the President
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
                      console.log(rating)
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
          <TextInput
            editable
            multiline
            placeholder={t('reviews.details_placeholder') || ''}
            numberOfLines={3}
            style={{
              borderWidth: 1,
              borderColor: COLORS['french-vanilla'][300],
              borderRadius: 12,
              paddingBottom: 16,
              paddingTop: 16,
              paddingHorizontal: 24,
              fontFamily: FONTS.LSTH_REGULAR,
            }}
          />
        </View>

        <HorizontalDivider />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Page
