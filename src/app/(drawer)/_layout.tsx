import type { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Drawer } from 'expo-router/drawer'
import type { FC } from 'react'
import { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { DrawerItems } from '~/const/drawer'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import FONTS from '~/styles/fonts'
import { BrandGradient } from '~/components/BrandGradient'
import COLORS from '~/styles/colors'

const WheelGoDrawer: FC<DrawerContentComponentProps> = (_props) => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <SafeAreaView style={{ padding: 16, flex: 1 }}>
      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',
          marginBottom: 32,
        }}
      >
        <Image
          style={{ width: 140, height: 32 }}
          source={require('~/assets/wordmark-dark.png')}
        />
      </View>
      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 12,
            height: 48,
          }}
          onPress={() => {
            router.push('/auth/login')
          }}
        >
          <BrandGradient
            style={{
              flex: 1,
              height: '100%',
              borderRadius: 12,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 24,
              paddingVertical: 12,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              {t('auth.login_to_wheelgo')}
            </Text>
            <MaterialIcons
              name="navigate_next"
              size={20}
              color={COLORS['french-vanilla'][100]}
            />
          </BrandGradient>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: 32,
          flex: 1,
        }}
      >
        {DrawerItems.map((item) => {
          const [isModalOpen, setIsModalOpen] = useState(false)

          const ModalElement = item.modal ? item.modal : null

          const IconElement = item.icon ? (
            <MaterialIcons
              name={item.icon}
              size={20}
              style={{ marginHorizontal: 8 }}
              color={item.iconColor ? item.iconColor : 'black'}
            />
          ) : null

          return (
            <View key={`drawer-item-${item.label}`}>
              <Pressable
                onPress={(_e) => {
                  if (item.href) {
                    router.push(item.href)
                  }

                  if (ModalElement) {
                    setIsModalOpen(true)
                  }
                }}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 16,
                  marginBottom: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_BOLD,
                    fontSize: 16,
                  }}
                >
                  {t(item.label)}
                </Text>
                {IconElement}
              </Pressable>
              {ModalElement ? (
                <ModalElement
                  isVisible={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              ) : null}
            </View>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

function DrawerLayout() {
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
