import { Drawer } from 'expo-router/drawer'

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}
    />
  )
}

export default DrawerLayout
