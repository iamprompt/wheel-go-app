import { useRouter } from 'expo-router'
import { useMemo, useRef, useState } from 'react'
import type {
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePreferences } from '~/context/usePreferences'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

const { width: screenWidth } = Dimensions.get('window')

function HowToPage({
  image,
  title,
  description,
}: {
  image: ImageSourcePropType
  title: string
  description: string
}) {
  return (
    <View
      style={{
        width: screenWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
      }}
    >
      <Image source={image} />
      <View
        style={{
          marginTop: 32,
          paddingHorizontal: 32,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.LSTH_BOLD,
            textAlign: 'center',
            fontSize: 24,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.LSTH_REGULAR,
            textAlign: 'center',
            fontSize: 14,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  )
}

const noOfPages = 8

function Page() {
  const router = useRouter()
  const { setTutorialShown } = usePreferences()
  const insets = useSafeAreaInsets()
  const scrollRef = useRef<ScrollView>(null)
  const [pageIndex, setPageIndex] = useState(0)

  const isLastPage = useMemo(() => {
    return pageIndex === noOfPages - 1
  }, [pageIndex])

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent
    const { x } = contentOffset

    // Page Index
    const page = Math.round(x / screenWidth)

    setPageIndex(page)
  }

  return (
    <View
      style={[
        GlobalStyle.container,
        {
          flex: 1,
          paddingTop: insets.top + 16,
          paddingBottom: insets.bottom + 16,
        },
      ]}
    >
      <View
        style={{
          marginTop: insets.top + 16,
          paddingHorizontal: 32,
          position: 'absolute',
          right: 0,
          zIndex: 1,
        }}
      >
        {isLastPage ? null : (
          <Pressable
            style={
              {
                // flex: 0,
              }
            }
            onPress={() => {
              scrollRef.current?.scrollToEnd()
              setPageIndex(noOfPages - 1)
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.LSTH_BOLD,
                color: COLORS['french-vanilla'][500],
                fontSize: 16,
              }}
            >
              Skip
            </Text>
          </Pressable>
        )}
      </View>
      <ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleScroll}
      >
        <HowToPage
          image={require('~/assets/howto/wheelgo-logo-with-shadow.png')}
          title="Welcome to Wheel Go 👋"
          description="Let's find out what you can do with Wheel Go"
        />
        <HowToPage
          image={require('~/assets/howto/nearby-places.png')}
          title="Nearby Places & Conditions"
          description="Explore places nearby, and see wheelchair-friendly surrounding conditions and routes"
        />
        <HowToPage
          image={require('~/assets/howto/places-accessibility.png')}
          title="Check Place's Accessibility"
          description="Tap to see place info, check the wheelchair-accessible facilities, and see the nearby places"
        />
        <HowToPage
          image={require('~/assets/howto/find-places.png')}
          title="Find Places, Get Guidelines"
          description="Tap on the search icon to search places, or get accessible route guidelines"
        />
        <HowToPage
          image={require('~/assets/howto/rate-reviews.png')}
          title="Rate & Leave a Review"
          description="Rate the accessibility and wheelchair-friendly facilities, and review the visited places"
        />
        <HowToPage
          image={require('~/assets/howto/trace.png')}
          title="Trace your journey"
          description="Contribute back to society through the route tracing of your journey"
        />
        <HowToPage
          image={require('~/assets/howto/records.png')}
          title="Records of Contribution"
          description="Tap record to view your record of favorite places, reviews, and contributed routes"
        />
        <HowToPage
          image={require('~/assets/howto/badge.png')}
          title="Get Recognized !"
          description="View your achievement and activity summary on the profile page, and get recognized through badge collection"
        />
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: 72,
            height: 48,
          }}
        >
          {pageIndex === 0 ? null : (
            <Pressable
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                if (pageIndex === 0) {
                  console.log('Start')
                } else {
                  scrollRef.current?.scrollTo({
                    x: (pageIndex - 1) * screenWidth,
                    animated: true,
                  })
                  setPageIndex(pageIndex - 1)
                }
              }}
            >
              <MaterialIcons name="arrow_back_ios_new" size={24} />
            </Pressable>
          )}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {Array.from({ length: noOfPages }).map((_, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor:
                    index === pageIndex
                      ? COLORS.magenta[500]
                      : COLORS['french-vanilla'][200],
                  marginHorizontal: 4,
                }}
              />
            )
          })}
        </View>
        <View
          style={{
            width: 72,
            height: 48,
          }}
        >
          <Pressable
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              backgroundColor: COLORS.magenta[500],
            }}
            onPress={async () => {
              if (isLastPage) {
                setTutorialShown(true)
                router.replace('/')
              } else {
                scrollRef.current?.scrollTo({
                  x: (pageIndex + 1) * screenWidth,
                  animated: true,
                })
                setPageIndex(pageIndex + 1)
              }
            }}
          >
            {isLastPage ? (
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  color: COLORS['french-vanilla'][100],
                  fontSize: 16,
                }}
              >
                Go
              </Text>
            ) : (
              <MaterialIcons
                name="arrow_forward_ios"
                size={24}
                style={{
                  color: COLORS['french-vanilla'][100],
                }}
              />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Page
