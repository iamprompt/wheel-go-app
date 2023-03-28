import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useMemo } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import * as Linking from 'expo-linking'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { usePreferences } from '~/context/usePreferences'

interface SettingItem {
  name: string
  label: string
  href?: string
  action?: () => void
  value?: string
}

interface SettingSection {
  name: string
  label: string
  items: SettingItem[]
}

export default function App() {
  const { appLanguage } = usePreferences()
  const router = useRouter()

  const settingItems = useMemo<SettingSection[]>(() => {
    return [
      {
        name: 'general',
        label: 'General',
        items: [
          {
            name: 'language',
            label: 'Language/ภาษา',
            href: '/settings/language',
            value: appLanguage === 'th' ? 'ไทย' : 'English',
          },
        ],
      },
      {
        name: 'privacy',
        label: 'Privacy',
        items: [
          {
            name: 'your-data-allowance',
            label: 'Your Personal Data Allowance',
            action: async () => {
              await Linking.openSettings()
            },
          },
          {
            name: 'privacy-policy',
            label: 'Privacy Policy',
            href: '/policy',
          },
        ],
      },
      {
        name: 'about',
        label: 'About',
        items: [
          {
            name: 'version',
            label: 'Version',
            value: '0.0.1',
          },
          {
            name: 'copyright',
            label: 'Copyright',
            value: 'Mahidol University',
          },
        ],
      },
    ]
  }, [appLanguage])

  return (
    <ScrollView
      style={[
        GlobalStyle.container,
        {
          flexDirection: 'column',
        },
      ]}
    >
      <Stack.Screen
        options={{
          title: 'Settings',
          headerShown: true,
        }}
      />
      <StatusBar style="auto" />

      {settingItems.map((section, sectionIndex) => {
        return (
          <View
            key={`setting-sections-${sectionIndex}-${section.name}`}
            style={{
              marginTop: 12,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                paddingHorizontal: 16,
                paddingVertical: 12,
                color: COLORS['french-vanilla'][500],
              }}
            >
              {section.label}
            </Text>
            <View>
              {section.items.map((item, index) => {
                return (
                  <Pressable
                    key={`setting-sections-${sectionIndex}-${section.name}-item-${item.name}`}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 16,
                      paddingVertical: 12,
                      borderColor: COLORS.soap[100],
                      borderBottomWidth: 1,
                      borderTopWidth: index === 0 ? 1 : 0,
                    }}
                    onPress={() => {
                      if (item.href) {
                        router.push(item.href)
                      } else if (item.action) {
                        item.action()
                      }
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_BOLD,
                      }}
                    >
                      {item.label}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      {item.value ? (
                        <Text
                          style={{
                            fontFamily: FONTS.LSTH_BOLD,
                            color: COLORS['french-vanilla'][500],
                          }}
                        >
                          {item.value}
                        </Text>
                      ) : null}
                      {!!item.href || !!item.action ? (
                        <MaterialIcons
                          name="chevron_right"
                          size={24}
                          color={COLORS['french-vanilla'][300]}
                          style={{
                            marginLeft: 12,
                          }}
                        />
                      ) : null}
                    </View>
                  </Pressable>
                )
              })}
            </View>
          </View>
        )
      })}

      <View
        style={{
          marginTop: 12,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_BOLD,
            paddingHorizontal: 16,
            paddingVertical: 12,
            color: COLORS['french-vanilla'][500],
          }}
        >
          Supported Division Organizations
        </Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingHorizontal: 16,
              paddingVertical: 16,
              borderColor: COLORS.soap[100],
              borderBottomWidth: 1,
              borderTopWidth: 1,
            }}
          >
            <Image
              source={require('~/assets/logo/faculty-of-ict.png')}
              style={{ height: 24, width: 127.5, marginHorizontal: 12 }}
            />
            <Image
              source={require('~/assets/logo/physical-system.png')}
              style={{ height: 24, width: 90, marginHorizontal: 12 }}
            />
            <Image
              source={require('~/assets/logo/dss-mahidol.png')}
              style={{ height: 24, width: 24, marginHorizontal: 12 }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          padding: 16,
          marginTop: 32,
        }}
      >
        <Pressable
          style={{
            borderRadius: 12,
            borderColor: COLORS['french-vanilla'][300],
            borderWidth: 1,
            paddingVertical: 12,
            alignItems: 'center',
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 16,
            }}
          >
            Delete Account
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}
