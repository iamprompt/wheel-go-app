import { Stack } from 'expo-router'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { usePreferences } from '~/context/usePreferences'
import { ImpairmentLevels } from '~/const/impairmentLevels'

function Page() {
  const { t } = useTranslation()
  const { appLanguage, setLanguage } = usePreferences()

  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: t('settings.language')!,
        }}
      />

      <View>
        {Object.entries(ImpairmentLevels).map(([key, level], i) => (
          <Pressable
            key={`language-option-${level.label}`}
            style={{
              paddingVertical: 16,
              paddingHorizontal: 16,
              borderColor: COLORS.soap[100],
              borderBottomWidth: 1,
              borderTopWidth: i === 0 ? 1 : 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onPress={() => {
              setLanguage(level.label)
            }}
          >
            <Text style={{ fontFamily: FONTS.LSTH_BOLD, fontSize: 14 }}>
              {level.label}
            </Text>
            <View>
              <MaterialIcons
                name={
                  appLanguage === key
                    ? 'radio_button_checked'
                    : 'radio_button_unchecked'
                }
                size={24}
                color={COLORS.magenta[500]}
              />
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}

export default Page
