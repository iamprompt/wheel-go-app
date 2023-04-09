import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useMemo } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { VerticalDivider } from '~/components/VerticalDivider'
import { GetPlaceById } from '~/graphql/query/places'
import { SearchRoutes } from '~/graphql/query/routes'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { useGraphQL } from '~/utils/useGraphQL'

function Page() {
  const insets = useSafeAreaInsets()
  const router = useRouter()

  const params = useSearchParams<{
    from?: string
    to?: string
  }>()

  const { data: placeOrigin } = useGraphQL(!!params.from, GetPlaceById, {
    id: params.from!,
  })

  const { data: placeDestination } = useGraphQL(!!params.to, GetPlaceById, {
    id: params.to!,
  })

  const { data: availableRoutes } = useGraphQL(
    !!params.from && !!params.to,
    SearchRoutes,
    {
      from: params.from!,
      to: params.to!,
    }
  )

  const originPlaceName = useMemo(() => {
    return getDisplayTextFromCurrentLanguage({
      en: placeOrigin?.Place?.nameEN,
      th: placeOrigin?.Place?.nameTH,
    })
  }, [placeOrigin])

  const destinationPlaceName = useMemo(() => {
    return getDisplayTextFromCurrentLanguage({
      en: placeDestination?.Place?.nameEN,
      th: placeDestination?.Place?.nameTH,
    })
  }, [placeDestination])

  return (
    <View style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Route Suggestions',
        }}
      />

      <View
        style={{
          // position: 'absolute',
          paddingTop: 16,
          paddingHorizontal: 16,
          paddingBottom: 16,
          borderBottomColor: COLORS.soap[100],
          borderBottomWidth: 1,
          gap: 12,
          alignItems: 'center',
          backgroundColor: COLORS.white,
          // zIndex: 1,
          // width: '100%',
        }}
      >
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <MaterialIcons name="circle" size={12} color={COLORS.black} />
          <Pressable
            style={{
              borderRadius: 12,
              flex: 1,
              borderColor: COLORS['french-vanilla'][300],
              borderWidth: 1,
              height: 48,
              paddingLeft: 80,
              paddingRight: 12,
              justifyContent: 'center',
            }}
            onPress={() => {
              router.push({
                pathname: '/routes/search',
                params: {
                  ...params,
                  field: 'from',
                  q: originPlaceName,
                },
              })
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.LSTH_REGULAR,
                fontSize: 16,
                color: placeOrigin?.Place
                  ? COLORS.black
                  : COLORS['french-vanilla'][500],
              }}
            >
              {originPlaceName || 'Where are you going from?'}
            </Text>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                justifyContent: 'center',
                marginLeft: 16,
                width: 60,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 16,
                  color: COLORS['french-vanilla'][500],
                }}
              >
                From
              </Text>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            marginVertical: -16,
            marginHorizontal: -6,
          }}
        >
          <MaterialIcons
            name="horizontal_rule"
            size={24}
            color={COLORS['french-vanilla'][300]}
            style={{
              transform: [{ rotate: '90deg' }],
            }}
          />
          <View
            style={{
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <MaterialIcons
            name="square"
            size={12}
            color={COLORS['fruit-punch'][400]}
          />
          <Pressable
            style={{
              flex: 1,
            }}
            onPress={() => {
              router.push({
                pathname: '/routes/search',
                params: {
                  ...params,
                  field: 'to',
                  q: destinationPlaceName,
                },
              })
            }}
          >
            <View
              style={{
                borderRadius: 12,
                // flex: 1,
                borderColor: COLORS['french-vanilla'][300],
                borderWidth: 1,
                height: 48,
                paddingLeft: 80,
                paddingRight: 12,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.LSTH_REGULAR,
                  fontSize: 16,
                  color: placeDestination?.Place
                    ? COLORS.black
                    : COLORS['french-vanilla'][500],
                }}
              >
                {destinationPlaceName || 'Where are you going to?'}
              </Text>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  marginLeft: 16,
                  width: 60,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_BOLD,
                    fontSize: 16,
                    color: COLORS['french-vanilla'][500],
                  }}
                >
                  To
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>

      <ScrollView>
        {availableRoutes?.Routes?.docs?.map((route) => {
          if (!route) {
            return null
          }

          return (
            <Pressable
              key={route.id}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 24,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderColor: COLORS.soap[100],
                borderBottomWidth: 1,
              }}
              onPress={() => {
                console.log(`Pressed on route ${route.id}`)
                router.push(`/routes/${route.id}`)
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  gap: 12,
                  alignItems: 'center',
                }}
              >
                <MaterialIcons
                  name="route"
                  size={32}
                  color={COLORS.success[400]}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 14,
                    }}
                  >
                    Route ID {route.id}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_REGULAR,
                        fontSize: 12,
                        color: COLORS['french-vanilla'][500],
                      }}
                    >
                      {route.distance} เมตร
                    </Text>
                    <VerticalDivider height={12} />
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_REGULAR,
                        fontSize: 12,
                        color: COLORS['french-vanilla'][500],
                      }}
                    >
                      5 นาที
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <MaterialIcons
                  name="chevron_right"
                  size={24}
                  color={COLORS['french-vanilla'][300]}
                />
              </View>
            </Pressable>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Page
