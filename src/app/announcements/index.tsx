import dayjs from 'dayjs'
import { Stack, useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { TagsLabel } from '~/const/tags'
import { AllAnnouncements } from '~/graphql/query/announcements'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { useGraphQL } from '~/utils/useGraphQL'

function Page() {
  const { t } = useTranslation()
  const router = useRouter()

  const { data } = useGraphQL(true, AllAnnouncements)

  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: t('page.announcements')!,
        }}
      />

      <View>
        {data?.Announcements?.docs?.map((item, i) => {
          if (!item) {
            return null
          }

          return (
            <Pressable
              key={`announcement-${item.id}`}
              style={({ pressed: _pressed }) => ({
                paddingHorizontal: 16,
                paddingVertical: 24,
                borderColor: COLORS.soap[100],
                borderTopWidth: i === 0 ? 1 : 0,
                borderBottomWidth: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                gap: 12,
              })}
              onPress={() => {
                router.push(`/announcements/${item.id}`)
              }}
            >
              <MaterialIcons
                name="campaign"
                size={24}
                color={COLORS.error[500]}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_BOLD,
                      fontSize: 14,
                      marginBottom: 4,
                    }}
                  >
                    {getDisplayTextFromCurrentLanguage({
                      th: item.titleTH,
                      en: item.titleEN,
                    })}
                  </Text>
                  {item.place ? (
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_REGULAR,
                        fontSize: 12,
                        color: COLORS['french-vanilla'][500],
                      }}
                    >
                      {getDisplayTextFromCurrentLanguage({
                        th: item.place?.nameTH,
                        en: item.place?.nameEN,
                      })}
                    </Text>
                  ) : null}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 10,
                      color: COLORS['french-vanilla'][500],
                    }}
                  >
                    {dayjs(item.createdAt).format('DD MMMM YYYY')}
                  </Text>
                  <View
                    style={{
                      width: 1,
                      height: '100%',
                      backgroundColor: COLORS.soap[100],
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 10,
                      color: COLORS['french-vanilla'][500],
                    }}
                  >
                    {dayjs(item.createdAt).format('HH:mm')}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 12,
                    flexWrap: 'wrap',
                  }}
                >
                  {item.tags?.map((tag, index) => {
                    return (
                      <View
                        key={`announcement-${item.id}-tag-${index}`}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 8,
                          paddingVertical: 4,
                          paddingHorizontal: 8,
                          borderColor: COLORS['french-vanilla'][300],
                          borderWidth: 1,
                          borderRadius: 8,
                        }}
                      >
                        <MaterialIcons
                          name={TagsLabel[tag].icon}
                          color={TagsLabel[tag].color}
                          size={16}
                        />
                        <Text
                          style={{
                            fontFamily: FONTS.LSTH_BOLD,
                            fontSize: 12,
                            color: TagsLabel[tag].color,
                          }}
                        >
                          {t(TagsLabel[tag].label)}
                        </Text>
                      </View>
                    )
                  })}
                </View>
              </View>
              <MaterialIcons
                name="arrow_forward_ios"
                size={24}
                color={COLORS['french-vanilla'][300]}
              />
            </Pressable>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Page
