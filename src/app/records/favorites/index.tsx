import { Stack } from 'expo-router'
import { ScrollView, Text } from 'react-native'
import { GlobalStyle } from '~/styles'

export default function Page() {
  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          title: 'Favorite Places',
          headerShown: true,
        }}
      />

      <Text>Favorites</Text>
    </ScrollView>
  )
}
