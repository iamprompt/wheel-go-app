import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, Text, View } from 'react-native'
import { MaterialIcons } from '../../../utils/icons/MaterialIcons'
import { RecordListItems } from '../../../const/records'

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          title: 'Records',
        }}
      />

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
            fontFamily: 'LINESeedSansTH-Bold',
            fontWeight: '700',
            fontSize: 16,
          }}
        >
          My lists
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
                borderColor: '#F6F7F8',
                borderTopWidth: index === 0 ? 1 : 0,
                borderBottomWidth: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              })}
              onPress={() => {
                console.log(`Pressed! ${item.label}`)
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
                  style={{
                    color: item.iconColor,
                    marginRight: 12,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: 'LINESeedSansTH-Bold',
                      fontWeight: '700',
                      fontSize: 14,
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'LINESeedSansTH-Regular',
                      fontWeight: '400',
                      fontSize: 12,
                      color: '#A6A6A6',
                    }}
                  >
                    3 {item.unit.plural}
                  </Text>
                </View>
              </View>
              <MaterialIcons
                name="chevron_right"
                size={24}
                style={{
                  color: '#D4D4D4',
                }}
              />
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}
