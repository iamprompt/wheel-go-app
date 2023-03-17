import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
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
  )
}

export default TabsLayout
