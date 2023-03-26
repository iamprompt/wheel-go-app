import { Tabs } from 'expo-router'

import type { ComponentProps } from 'react'
import { MaterialIcons } from '../../../utils/icons/MaterialIcons'

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
            let iconName: ComponentProps<typeof MaterialIcons>['name'] =
              'question_mark'

            if (route.name === 'index') {
              iconName = focused ? 'explore' : 'explore'
            } else if (route.name === 'records') {
              iconName = focused ? 'insert_drive_file' : 'insert_drive_file'
            } else if (route.name === 'profile') {
              iconName = focused ? 'person' : 'person_outline'
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />
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
