import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useTranslation } from 'react-i18next'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { BADGES } from '~/const/badges'
import { SUMMARY_DETAILS } from '~/const/profile'
import { useAuth } from '~/context/useAuth'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

export default function App() {
  const insets = useSafeAreaInsets()
  const { user } = useAuth()
  const { t } = useTranslation()

  if (!user) {
    return null
  }

  return (
    <ScrollView
      style={[
        GlobalStyle.container,
        {
          paddingTop: insets.top + 16,
          // paddingHorizontal: 16,
        },
      ]}
      // bounces={false}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <StatusBar style="auto" />

      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <Image
            source={{
              uri: user.image,
              width: 128,
              height: 128,
            }}
            style={{
              borderRadius: 64,
              borderColor: COLORS.magenta[500],
              borderWidth: 4,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: -10,
              paddingHorizontal: 12,
              paddingVertical: 4,
              backgroundColor: COLORS.magenta[500],
              borderRadius: 12,
              borderColor: COLORS['french-vanilla'][300],
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                color: COLORS.white,
                fontSize: 14,
              }}
            >
              Lvl.10
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 16,
            marginBottom: 8,
            textAlign: 'center',
            fontSize: 28,
            fontFamily: FONTS.LSTH_BOLD,
          }}
        >
          {user.firstName} {user.lastName}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: FONTS.LSTH_REGULAR,
            fontSize: 14,
            color: COLORS['french-vanilla'][500],
          }}
        >
          {t(`impairment_level.${user.impairmentLevel}`)}
        </Text>
        <View
          style={{
            marginTop: 12,
            alignItems: 'center',
          }}
        >
          <Pressable
            onPress={() => {
              console.log('Edit Profile')
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                fontSize: 12,
                color: COLORS.magenta[500],
              }}
            >
              {t('profile.edit_profile')}
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 32,
            marginBottom: 16,
            flexDirection: 'row',
            gap: 16,
            justifyContent: 'center',
          }}
        >
          {['novice_navigator', 'master_reviewer', 'coming_soon'].map(
            (badgeKey, index) => {
              const badge = BADGES[badgeKey]

              if (!badge) {
                return null
              }

              return (
                <View
                  key={index}
                  style={{
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      borderColor: badge.color,
                      borderWidth: 2,
                      borderRadius: 28,
                      padding: 8,
                      width: 52,
                      height: 52,
                      marginBottom: 8,
                    }}
                  >
                    <MaterialIcons
                      name={badge.icon}
                      size={32}
                      color={badge.color}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_BOLD,
                      fontSize: 12,
                      width: 80,
                      textAlign: 'center',
                      color: badge.color,
                    }}
                  >
                    {t(`badges.${badgeKey}`)}
                  </Text>
                </View>
              )
            }
          )}
        </View>
      </View>
      <HorizontalDivider />
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}
      >
        <MaterialIcons
          name="accessible_forward"
          size={32}
          color={COLORS.magenta[500]}
          style={{
            left: '50%',
            marginLeft: -28,
            marginBottom: -1,
          }}
        />
        <View
          style={{
            height: 8,
            backgroundColor: COLORS.soap[100],
            borderRadius: 96,
            overflow: 'hidden',
          }}
        >
          <View
            style={{
              height: 8,
              width: '50%',
              backgroundColor: COLORS.magenta[500],
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 8,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 12,
              color: COLORS['french-vanilla'][500],
            }}
          >
            <Text
              style={{
                color: COLORS.magenta[500],
              }}
            >
              XP 1,000
            </Text>
            /2,000
          </Text>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 12,
              color: COLORS['french-vanilla'][500],
            }}
          >
            <Text
              style={{
                color: COLORS.magenta[500],
              }}
            >
              1,000 XP
            </Text>{' '}
            เพื่ออัปเลเวล
          </Text>
        </View>
      </View>
      <HorizontalDivider height={12} />
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 24,
          paddingBottom: 68 + 24,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_BOLD,
            fontSize: 14,
            marginBottom: 16,
          }}
        >
          {t('profile.my_summary')}
        </Text>
        <View
          style={{
            gap: 16,
          }}
        >
          {SUMMARY_DETAILS.map((detail) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                    flex: 1,
                  }}
                >
                  <MaterialIcons
                    name={detail.icon}
                    size={24}
                    color={COLORS.magenta[500]}
                  />
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_BOLD,
                      fontSize: 14,
                      flex: 1,
                    }}
                  >
                    {t(detail.label)}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 14,
                      color: COLORS['french-vanilla'][500],
                    }}
                  >
                    {detail.value}
                  </Text>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}
