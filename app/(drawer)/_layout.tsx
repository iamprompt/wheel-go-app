import type { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Drawer } from 'expo-router/drawer'
import type { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { DrawerItems } from '../../const/drawer'
import { MaterialIcons } from '../../utils/icons/MaterialIcons'

const WheelGoDrawer: FC<DrawerContentComponentProps> = (_props) => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ padding: 16, flex: 1 }}>
      <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
        <Image
          style={{ width: 140, height: 32 }}
          source={require('../../assets/wordmark-dark.png')}
        />
      </View>
      <View
        style={{
          marginTop: 32,
          flex: 1,
        }}
      >
        {DrawerItems.map((item) => {
          const IconElement = item.icon ? (
            <MaterialIcons
              name={item.icon}
              size={20}
              style={{ marginHorizontal: 8 }}
              color={item.iconColor ? item.iconColor : 'black'}
            />
          ) : null

          return (
            <Pressable
              key={`drawer-item-${item.label}`}
              onPress={(_e) => {
                router.push(item.href)
              }}
              style={{
                paddingHorizontal: 32,
                paddingVertical: 16,
                marginBottom: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: 'LINESeedSansTH-Bold',
                  fontSize: 16,
                }}
              >
                {item.label}
              </Text>
              {IconElement}
            </Pressable>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        swipeEnabled: false,
      }}
      drawerContent={(props) => <WheelGoDrawer {...props} />}
    />
  )
}

export default DrawerLayout
