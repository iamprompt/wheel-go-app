import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Reviews',
          headerShown: true,
        }}
      />

      <Text>Reviews</Text>
    </View>
  )
}
