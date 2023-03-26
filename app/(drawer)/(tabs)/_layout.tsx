import { Tabs } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'

const HomeLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          headerTitleStyle: {
            fontFamily: 'LINESeedSansTH-Bold',
            fontWeight: '700',
            fontSize: 20,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any = ''

            if (route.name === 'index') {
              iconName = focused ? 'ios-compass' : 'ios-compass-outline'
            } else if (route.name === 'records') {
              iconName = focused ? 'ios-document' : 'ios-document-outline'
            } else if (route.name === 'profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarLabelStyle: {
            fontWeight: '700',
            fontFamily: 'LINESeedSansTH-Bold',
          },
          tabBarActiveTintColor: '#1B052F',
          tabBarInactiveTintColor: '#D4D4D4',
          tabBarStyle: {
            height: 92,
          },
          tabBarItemStyle: {
            paddingVertical: 5,
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Explore',
          }}
        />
        <Tabs.Screen
          name="records"
          options={{
            title: 'Records',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>
    </>
  )
}

export default HomeLayout
