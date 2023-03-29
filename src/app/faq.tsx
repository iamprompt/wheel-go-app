import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import type { FC } from 'react'
import { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FAQItems } from '~/const/faq'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface QuestionItemProps {
  question: string
  answer: string
}

const QuestionItem: FC<QuestionItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <View
      style={{
        borderBottomColor: COLORS.soap[100],
        borderBottomWidth: 1,
      }}
    >
      <Pressable
        style={{
          paddingVertical: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => setIsExpanded((prev) => !prev)}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_BOLD,
            fontSize: 16,
          }}
        >
          {question}
        </Text>
        <MaterialIcons
          name={isExpanded ? 'remove' : 'add'}
          size={24}
          color={COLORS['french-vanilla'][300]}
        />
      </Pressable>
      {isExpanded ? (
        <View
          style={{
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 12,
            }}
          >
            {answer}
          </Text>
        </View>
      ) : null}
    </View>
  )
}

const Page = () => {
  const insets = useSafeAreaInsets()

  return (
    <ScrollView
      style={[GlobalStyle.container, { paddingHorizontal: 16, paddingTop: 24 }]}
    >
      <Stack.Screen
        options={{
          title: 'FAQ',
          headerShown: true,
        }}
      />

      <StatusBar style="auto" />

      <Text
        style={{
          fontFamily: FONTS.LSTH_BOLD,
          fontSize: 24,
        }}
      >
        Frequently Asked Questions
      </Text>

      <View
        style={{
          paddingBottom: insets.bottom + 24,
        }}
      >
        <View>
          {FAQItems.en.map((item, index) => {
            return (
              <QuestionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            )
          })}
        </View>
        <View>
          <Text
            style={{
              paddingVertical: 24,
              color: COLORS['french-vanilla'][500],
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 12,
            }}
          >
            Can't find an answer to your questions? Feel free to contact us at{' '}
            <Text
              style={{
                color: COLORS.magenta[500],
                fontFamily: FONTS.LSTH_REGULAR,
                fontSize: 12,
              }}
            >
              wheelgo.muict@gmail.com
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Page
