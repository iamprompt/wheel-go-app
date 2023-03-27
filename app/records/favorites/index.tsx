import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Favorite Places',
          headerShown: true,
          headerTitleStyle: {
            fontFamily: 'LINESeedSansTH-Bold',
            fontSize: 20,
          },
        }}
      />

      <Text>Favorites</Text>
    </View>
  )
}
