import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { Policy } from '~/const/policy'
import { GlobalStyle } from '~/styles'
import FONTS from '~/styles/fonts'

const Page = () => {
  return (
    <ScrollView
      style={[
        GlobalStyle.container,
        {
          paddingHorizontal: 16,
          paddingVertical: 24,
        },
      ]}
    >
      <Stack.Screen
        options={{
          title: 'Privacy Policy',
          headerShown: true,
        }}
      />

      <StatusBar style="auto" />

      <Text
        style={{
          fontFamily: FONTS.LSTH_BOLD,
          fontSize: 24,
        }}
      >
        Privacy Policy
      </Text>

      <View
        style={{
          marginTop: 12,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_REGULAR,
            fontSize: 12,
          }}
        >
          {Policy.en}
        </Text>
      </View>
    </ScrollView>
  )
}

export default Page
