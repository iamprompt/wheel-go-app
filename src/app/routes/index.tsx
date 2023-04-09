import { Stack } from 'expo-router'
import { Text, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

function Page() {
  const insets = useSafeAreaInsets()

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
          position: 'absolute',
          paddingTop: 16,
          paddingHorizontal: 16,
          paddingBottom: 16,
          borderBottomColor: COLORS.soap[100],
          borderBottomWidth: 1,
          gap: 12,
          alignItems: 'center',
          backgroundColor: COLORS.white,
          zIndex: 1,
          width: '100%',
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <MaterialIcons name="circle" size={12} color={COLORS.black} />
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
                paddingLeft: 80,
                paddingRight: 12,
                fontFamily: FONTS.LSTH_REGULAR,
                fontSize: 16,
              }}
              returnKeyType="search"
              placeholder="Explore new places"
              // onSubmitEditing={handleSearch}
              // value={searchText}
              // onChangeText={setSearchText}
            />
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
          </View>
        </View>
        <View
          style={{
            flex: 1,
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
            flex: 1,
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
                paddingLeft: 80,
                paddingRight: 12,
                fontFamily: FONTS.LSTH_REGULAR,
                fontSize: 16,
              }}
              returnKeyType="search"
              placeholder="Where are you going to?"
              // onSubmitEditing={handleSearch}
              // value={searchText}
              // onChangeText={setSearchText}
            />
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
        </View>
      </View>
    </View>
  )
}

export default Page
