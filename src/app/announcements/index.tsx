import { Stack, useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { RecordListItems } from '~/const/records'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

const Page = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: t('page.announcements')!,
        }}
      />

      <View>
        {RecordListItems.map((item, index) => {
          return (
            <Pressable
              key={item.label}
              style={({ pressed: _pressed }) => ({
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderColor: COLORS.soap[100],
                borderTopWidth: index === 0 ? 1 : 0,
                borderBottomWidth: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              })}
              onPress={() => {
                console.log(`Pressed! ${item.label}`)
                router.push(item.href)
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <MaterialIcons
                  name={item.icon}
                  size={24}
                  style={{
                    color: item.iconColor,
                    marginRight: 12,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_BOLD,
                      fontSize: 14,
                      marginBottom: 4,
                    }}
                  >
                    {t(item.label)}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 12,
                      color: COLORS['french-vanilla'][500],
                    }}
                  >
                    3 {t(item.unit.plural)}
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="chevron_right"
                size={24}
                style={{
                  color: COLORS['french-vanilla'][300],
                }}
              />
            </Pressable>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Page
