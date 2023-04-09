import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { RecordListItems } from '~/const/records'
import { GlobalStyle } from '~/styles'
import FONTS from '~/styles/fonts'
import COLORS from '~/styles/colors'
import { useAuth } from '~/context/useAuth'
import { NotSignedIn } from '~/components/NotSignin'
import { useGraphQL } from '~/utils/useGraphQL'
import { GetUserFavoritePlaces } from '~/graphql/query/user'
import { GetMyReviews } from '~/graphql/query/reviews'
import { GetMyTracedRoutes } from '~/graphql/query/tracedRoute'

export default function App() {
  const { user } = useAuth()
  const { t } = useTranslation()
  const router = useRouter()

  const { data: favData } = useGraphQL(true, GetUserFavoritePlaces)

  const favPlacesNo = useMemo(() => {
    if (favData) {
      return favData?.meUser?.user?.favoritePlaces?.length || 0
    }
    return 0
  }, [favData])

  const { data: reviewData } = useGraphQL(!!user, GetMyReviews, {
    userId: user?.id || '',
  })

  const reviewNo = useMemo(() => {
    if (reviewData) {
      return reviewData?.Reviews?.totalDocs || 0
    }
    return 0
  }, [reviewData])

  const { data: routeData } = useGraphQL(!!user, GetMyTracedRoutes)

  const routeNo = useMemo(() => {
    if (routeData) {
      return routeData?.TracedRoutes?.totalDocs || 0
    }
    return 0
  }, [routeData])

  if (!user) {
    return (
      <NotSignedIn>
        <Stack.Screen
          options={{
            headerShown: true,
          }}
        />
      </NotSignedIn>
    )
  }

  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen />

      <StatusBar style="auto" />

      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 24,
          paddingBottom: 12,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_BOLD,
            fontSize: 16,
          }}
        >
          {t('records.my_lists')}
        </Text>
      </View>
      <View>
        {RecordListItems.map((item, index) => {
          return (
            <Pressable
              key={item.label}
              style={({ pressed: _pressed }) => ({
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderColor: COLORS.soap[100],
                borderTopWidth: index === 0 ? 1 : 0,
                borderBottomWidth: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              })}
              onPress={() => {
                console.log(`Pressed! ${item.label}`)
                router.push(item.href)
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <MaterialIcons
                  name={item.icon}
                  size={24}
                  color={item.iconColor}
                  style={{
                    marginRight: 12,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_BOLD,
                      fontSize: 14,
                      marginBottom: 4,
                    }}
                  >
                    {t(item.label)}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 12,
                      color: COLORS['french-vanilla'][500],
                    }}
                  >
                    {item.label === 'records.favorite_places'
                      ? favPlacesNo
                      : item.label === 'records.places_reviews'
                      ? reviewNo
                      : item.label === 'records.contributed_routes'
                      ? routeNo
                      : 0}{' '}
                    {t(item.unit.plural)}
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="chevron_right"
                size={24}
                color={COLORS['french-vanilla'][300]}
              />
            </Pressable>
          )
        })}
      </View>
    </ScrollView>
  )
}
