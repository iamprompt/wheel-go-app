import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { GlobalStyle } from '~/styles'

export default function App() {
  return (
    <View style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          title: 'Settings',
          headerShown: true,
        }}
      />

      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
