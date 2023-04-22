import { StackActions } from '@react-navigation/native'
import { useNavigation, useRouter, useSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import type {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native'
import { ScrollView, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderBackButton } from '~/components/HeaderBackButton'
import { PlaceItem } from '~/components/PlaceItem'
import { useSearchPlacesQuery } from '~/generated-types'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

function Page() {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const navigation = useNavigation()

  const { q, field, ...params } = useSearchParams<{
    q?: string
    field: string
    from?: string
    to?: string
  }>()

  console.log(params, q, field)

  const [query, setQuery] = useState<string>(q || '')
  const [searchText, setSearchText] = useState<string>(q || '')

  const handleSearch = async (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    router.setParams({ q: e.nativeEvent.text })
    setQuery(e.nativeEvent.text)
  }

  const toExclude = field === 'from' ? params.to : params.from

  const { data } = useSearchPlacesQuery({
    variables: {
      query,
      exclude: toExclude ? [toExclude] : undefined,
    },
  })

  useEffect(() => {
    if (searchText) {
      router.setParams({ q: searchText })
      setQuery(searchText)
    }
  }, [searchText])

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
        ></ScrollView>
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
                  key={`place-${place.id}`}
                  name={getDisplayTextFromCurrentLanguage({
                    th: place.name?.th,
                    en: place.name?.en,
                  })}
                  rating={4.5}
                  category={place.type!}
                  date="2021-08-01"
                  onPress={() => {
                    navigation.dispatch(StackActions.pop(1))
                    router.replace({
                      pathname: '/routes',
                      params: {
                        ...params,
                        [field!]: place.id,
                      },
                    })
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
