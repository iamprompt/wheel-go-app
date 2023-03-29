import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { RecordListItems } from '~/const/records'
import { GlobalStyle } from '~/styles'
import FONTS from '~/styles/fonts'
import COLORS from '~/styles/colors'

export default function App() {
  const router = useRouter()

  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen />

      <StatusBar style="auto" />

      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 24,
          paddingBottom: 12,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_BOLD,
            fontSize: 16,
          }}
        >
          My lists
        </Text>
      </View>
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
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 12,
                      color: COLORS['french-vanilla'][500],
                    }}
                  >
                    3 {item.unit.plural}
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
