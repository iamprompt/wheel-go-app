import { Text, View } from 'react-native'
import { Image } from 'expo-image'
import { AccessibilityRatingOverall } from './AccessibilityRatingOverall'
import { ReviewOfficialComment } from './ReviewOfficialComment'
import { Tag } from './common/Tag'
import { AccessibilityRatingTag } from './AccessibilityRatingTag'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { FormatEnum, format } from '~/utils/dayjs'
import { FACILITIES } from '~/const/facility'

interface ReviewItemProps {
  reviewer: string
  date: string
  overallRating: number
  additionalComment?: string
  officialComment?: Parameters<typeof ReviewOfficialComment>[0]
  facilityRatings?: {
    [key in keyof typeof FACILITIES]?: number
  }
  facilityTags?: string[]
  images?: {
    id: string
    url: string
  }[]
}

export function ReviewItem({
  reviewer,
  date,
  overallRating = 0,
  facilityRatings,
  facilityTags,
  officialComment,
  additionalComment,
  images = [],
}: ReviewItemProps) {
  return (
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
          {reviewer}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.LSTH_REGULAR,
            fontSize: 12,
            color: COLORS['french-vanilla'][500],
          }}
        >
          {format(date, [FormatEnum.DATE, FormatEnum.TIME])}
        </Text>
      </View>
      <AccessibilityRatingOverall rating={overallRating} />
      {facilityRatings ? (
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
                rating={
                  facilityRatings[facility as keyof typeof FACILITIES] || 0
                }
              />
            )
          })}
        </View>
      ) : null}
      {facilityTags ? (
        <View
          style={{
            gap: 8,
          }}
        >
          {Array.from({ length: Math.ceil(facilityTags.length / 2) }).map(
            (_, i) => {
              return (
                <View
                  key={`tag-${i}`}
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 8,
                  }}
                >
                  {Array.from({ length: 2 }).map((_, index) => {
                    const tagIndex = i * 2 + index
                    const tag = facilityTags[tagIndex]

                    if (!tag) {
                      return (
                        <View
                          style={{
                            flex: 1,
                            padding: 1,
                          }}
                        />
                      )
                    }

                    return (
                      <Tag
                        key={`tag-${i}-${index}`}
                        label={`reviews.facility_tags.${tag}`}
                        fullWidth
                        height={28}
                        textColor={COLORS.magenta[500]}
                      />
                    )
                  })}
                </View>
              )
            }
          )}
        </View>
      ) : null}
      <View>
        <Text
          style={{
            fontFamily: FONTS.LSTH_REGULAR,
            fontSize: 12,
            color: COLORS['french-vanilla'][500],
          }}
        >
          {additionalComment}
        </Text>
      </View>
      {images.length ? (
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
          }}
        >
          {images.map(({ id, url }) => {
            return (
              <Image
                key={id}
                source={url}
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
      {officialComment ? <ReviewOfficialComment {...officialComment} /> : null}
    </View>
  )
}
