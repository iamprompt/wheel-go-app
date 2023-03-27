import { Stack, useNavigation } from 'expo-router'
import { View } from 'react-native'
import { MaterialIcons } from '../../utils/icons/MaterialIcons'

const SettingsLayout = () => {
  const navigation = useNavigation()

  return (
    <Stack
      screenOptions={({ route: _route }) => ({
        headerTitleStyle: {
          fontFamily: 'LINESeedSansTH-Bold',
          fontSize: 20,
        },
        headerLeft: (_props) => {
          return (
            <View>
              <MaterialIcons
                name="chevron_left"
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
