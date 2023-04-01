import type { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { useNavigation } from 'expo-router'
import { View } from 'react-native'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

export function HeaderBackButton(_props: HeaderBackButtonProps) {
  const navigation = useNavigation()

  return (
    <View>
      <MaterialIcons
        name="arrow_back_ios_new"
        size={24}
        onPress={(_e) => {
          navigation.canGoBack() && navigation.goBack()
        }}
      />
    </View>
  )
}
