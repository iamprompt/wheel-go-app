import dayjs from 'dayjs'
import { Stack, useSearchParams } from 'expo-router'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Linking from 'expo-linking'
import { TagsLabel } from '~/const/tags'
import { GetAnnouncementById } from '~/graphql/query/announcements'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { useGraphQL } from '~/utils/useGraphQL'
import { ImageWithFallback } from '~/components/ImageWithFallback'

function Page() {
  const { t } = useTranslation()
  const { id } = useSearchParams<{ id: string }>()
  const insets = useSafeAreaInsets()

  const [contentOffsetY, setContentOffsetY] = useState(0)

  const { data } = useGraphQL(true, GetAnnouncementById, {
    id: id!,
  })

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
      en: data?.Announcement?.titleEN || '',
      th: data?.Announcement?.titleTH || '',
    })
  }, [contentOffsetY, data?.Announcement?.titleEN, data?.Announcement?.titleTH])

  const contacts = useMemo(() => {
    if (!data?.Announcement?.contact) {
      return null
    }

    const contactData = []

    const { phone, line, email } = data?.Announcement?.contact

    if (email) {
      contactData.push({
        label: t('announcements.contact.email')!,
        value: email,
        href: `mailto:${email}`,
      })
    }

    if (phone) {
      contactData.push({
        label: t('announcements.contact.phone')!,
        value: phone,
        href: `tel:${phone}`,
      })
    }

    if (line) {
      contactData.push({
        label: t('announcements.contact.line')!,
        value: line,
        href: `https://line.me/R/ti/p/${line}`,
      })
    }

    return contactData
  }, [data?.Announcement?.contact])

  const shouldShowContact = useMemo(() => {
    if (!contacts) {
      return false
    }

    return contacts.some((item) => !!item.value)
  }, [contacts])

  if (!data) {
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

      <ImageWithFallback
        src={data.Announcement?.image?.url}
        width="100%"
        height={insets.top + 44 + 150}
      />

      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            paddingVertical: 24,
            borderColor: COLORS.soap[100],
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: FONTS.LSTH_BOLD,
              }}
            >
              {getDisplayTextFromCurrentLanguage({
                th: data?.Announcement?.titleTH,
                en: data?.Announcement?.titleEN,
              })}
            </Text>
            {data.Announcement?.place ? (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: FONTS.LSTH_REGULAR,
                }}
              >
                {getDisplayTextFromCurrentLanguage({
                  th: data.Announcement?.place?.nameTH,
                  en: data.Announcement?.place?.nameEN,
                })}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.LSTH_REGULAR,
                fontSize: 12,
                color: COLORS['french-vanilla'][500],
              }}
            >
              {dayjs(data.Announcement?.createdAt).format('DD MMMM YYYY')}
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
                fontSize: 12,
                color: COLORS['french-vanilla'][500],
              }}
            >
              {dayjs(data.Announcement?.createdAt).format('HH:mm')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            {data.Announcement?.tags?.map((tag, index) => {
              return (
                <View
                  key={`announcement-${id}-tag-${index}`}
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
        <View
          style={{
            paddingVertical: 24,
            borderColor: COLORS.soap[100],
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 16,
              marginBottom: 12,
            }}
          >
            {t('announcements.details')}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 12,
            }}
          >
            {getDisplayTextFromCurrentLanguage({
              th: data.Announcement?.descriptionTH,
              en: data.Announcement?.descriptionEN,
            })}
          </Text>
        </View>

        {shouldShowContact ? (
          <View
            style={{
              paddingVertical: 24,
              borderColor: COLORS.soap[100],
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                fontSize: 16,
                marginBottom: 12,
              }}
            >
              {t('announcements.contact.title')}
            </Text>
            <View>
              {contacts?.map((item, index) => {
                return (
                  <View
                    key={`announcement-${id}-contact-${index}`}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingVertical: 12,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_BOLD,
                        fontSize: 14,
                        color: COLORS['french-vanilla'][500],
                      }}
                    >
                      {item.label}
                    </Text>
                    <Pressable
                      onPress={() => {
                        Linking.openURL(item.href)
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONTS.LSTH_REGULAR,
                          fontSize: 14,
                          color: COLORS.magenta[500],
                        }}
                      >
                        {item.value}
                      </Text>
                    </Pressable>
                  </View>
                )
              })}
            </View>
          </View>
        ) : null}
      </View>
    </ScrollView>
  )
}

export default Page
