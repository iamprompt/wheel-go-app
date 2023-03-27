import { Stack } from 'expo-router'
import { Text, View } from 'react-native'
import { GlobalStyle } from '~/styles'

export default function Page() {
  return (
    <View style={[GlobalStyle.container]}>
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
