import { useNavigation } from 'expo-router'
import { Pressable } from 'react-native'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

export function HeaderBackButton() {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={(_e) => {
        navigation.canGoBack() && navigation.goBack()
      }}
    >
      <MaterialIcons name="arrow_back_ios_new" size={24} />
    </Pressable>
  )
}
