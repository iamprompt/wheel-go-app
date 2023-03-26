import { Stack, useNavigation } from 'expo-router'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SettingsLayout = () => {
  const navigation = useNavigation()

  return (
    <Stack
      screenOptions={({ route: _route }) => ({
        headerTitleStyle: {
          fontFamily: 'LINESeedSansTH-Bold',
          fontWeight: '700',
          fontSize: 20,
        },
        headerLeft: (_props) => {
          return (
            <View>
              <Ionicons
                name="ios-chevron-back"
                size={24}
                onPress={(_e) => {
                  navigation.canGoBack() && navigation.goBack()
                }}
              />
            </View>
          )
        },
      })}
    >
      <Stack.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Stack>
  )
}

export default SettingsLayout
