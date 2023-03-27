import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function Page() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Routes',
          headerShown: true,
        }}
      />

      <Text>Routes</Text>
    </View>
  )
}
