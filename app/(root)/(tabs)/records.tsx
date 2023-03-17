import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Records</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Page
