import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Favorite Places',
          headerShown: true,
        }}
      />

      <Text>Favorites</Text>
    </View>
  )
}
