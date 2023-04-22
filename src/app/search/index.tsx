import { useRouter, useSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CategoryLabel } from '~/components/CategoryLabel'
import { HeaderBackButton } from '~/components/HeaderBackButton'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { NearbyPlaces } from '~/components/NearbyPlaces'
import { PlaceItem } from '~/components/PlaceItem'
import type { ListCategoryIcon } from '~/const/category'
import { TagsLabel } from '~/const/tags'
import { useSearchPlacesQuery } from '~/generated-types'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

function Page() {
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()
  const router = useRouter()

  const { q } = useSearchParams<{ q: string }>()

  const [query, setQuery] = useState<string>(q || '')
  const [searchText, setSearchText] = useState<string>(q || '')

  const handleSearch = async (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    router.setParams({ q: e.nativeEvent.text })
    setQuery(e.nativeEvent.text)
  }

  const { data } = useSearchPlacesQuery({
    variables: {
      query,
    },
  })

  useEffect(() => {
    if (q) {
      setQuery(q)
      setSearchText(q)
    }
  }, [q])

  return (
    <View style={[GlobalStyle.container]}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          paddingTop: insets.top + 16,
          paddingHorizontal: 16,
          paddingBottom: 16,
          borderBottomColor: COLORS.soap[100],
          borderBottomWidth: 1,
          gap: 12,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.white,
          zIndex: 1,
        }}
      >
        <HeaderBackButton />
        <View
          style={{
            flex: 1,
          }}
        >
          <TextInput
            style={{
              borderRadius: 12,
              flex: 1,
              borderColor: COLORS['french-vanilla'][300],
              borderWidth: 1,
              height: 48,
              paddingLeft: 48,
              paddingRight: 12,
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 16,
            }}
            returnKeyType="search"
            placeholder="Explore new places"
            onSubmitEditing={handleSearch}
            value={searchText}
            onChangeText={setSearchText}
          />
          <MaterialIcons
            name="search"
            size={24}
            style={{
              position: 'absolute',
              left: 12,
              top: 12,
            }}
          />
        </View>
      </View>

      {!query ? (
        <ScrollView
          style={{
            paddingTop: insets.top + 81,
          }}
        >
          <View
            style={{
              paddingVertical: 24,
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                fontSize: 16,
                marginBottom: 12,
              }}
            >
              {t('search.categories')}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              {Object.keys(TagsLabel).map((key) => (
                <Pressable
                  key={key}
                  onPress={() => {
                    console.log(key)
                  }}
                >
                  <CategoryLabel name={key as keyof typeof ListCategoryIcon} />
                </Pressable>
              ))}
            </View>
          </View>
          <HorizontalDivider />
          <NearbyPlaces />
        </ScrollView>
      ) : (
        <ScrollView bounces={false}>
          <View
            style={{
              paddingTop: insets.top + 81,
              paddingBottom: insets.bottom,
              flex: 1,
            }}
          >
            {data?.getPlaces?.map((place) => {
              if (!place) {
                return null
              }

              return (
                <PlaceItem
                  key={`nearby-${place.id}`}
                  name={getDisplayTextFromCurrentLanguage({
                    th: place.name?.th,
                    en: place.name?.en,
                  })}
                  rating={4.5}
                  category={place.type!}
                  date="2021-08-01"
                  onPress={() => {
                    router.push(`/places/${place.id}`)
                  }}
                  borderBottom
                />
              )
            })}
          </View>
        </ScrollView>
      )}
    </View>
  )
}

export default Page
