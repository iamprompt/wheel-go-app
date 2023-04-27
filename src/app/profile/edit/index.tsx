import { Image } from 'expo-image'
import { Stack } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { Keyboard, Pressable, Text, TextInput, View } from 'react-native'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import { useEffect, useState } from 'react'
import { toast } from 'burnt'
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker'
import { ReactNativeFile } from 'apollo-upload-client'
import { ProfileEditSection } from './editSection'
import { useAuth } from '~/context/useAuth'
import {
  useGetMyProfileLazyQuery,
  useUpdateProfileMutation,
  useUploadMediaMutation,
} from '~/generated-types'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface ProfileForm {
  [key: string]: string | undefined
  firstname: string
  lastname: string
  email: string
  username: string
  impairmentLevel: string
  equipment: string
  profileImage: string
}

export default function Page() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [getProfile, { data }] = useGetMyProfileLazyQuery()
  const [updateProfile] = useUpdateProfileMutation({
    refetchQueries: ['GetMyProfile'],
  })
  const [uploadImage] = useUploadMediaMutation({
    refetchQueries: ['GetMyProfile'],
  })

  const [profileForm, setProfileForm] = useState<ProfileForm>({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    impairmentLevel: '',
    equipment: '',
    profileImage: '',
  })

  const initProfile = async () => {
    const { data: profile } = await getProfile()
    console.log('profile', profile)

    if (profile) {
      const { me } = profile

      setProfileForm({
        firstname: me.firstname || '',
        lastname: me.lastname || '',
        email: me.email || '',
        username: me.username || '',
        impairmentLevel: me.metadata?.impairmentLevel || '',
        equipment: me.metadata?.equipment || '',
        profileImage: me.profileImage?.url || '',
      })
    }
  }

  const handleFormSubmit = async () => {
    console.log('FORM SUBMIT')

    try {
      await updateProfile({
        variables: {
          input: {
            firstname: profileForm?.firstname,
            lastname: profileForm?.lastname,
            username: profileForm?.username,
            metadata: {
              impairmentLevel: profileForm?.impairmentLevel,
              equipment: profileForm?.equipment,
            },
          },
        },
      })

      Keyboard.dismiss()

      toast({
        title: t('profile.edit.success'),
        haptic: 'success',
        preset: 'custom',
        duration: 3,
        icon: {
          ios: {
            name: 'person.2.fill',
            color: COLORS.magenta[500],
          },
        },
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleProfileImageChange = async () => {
    const { assets, canceled } = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: false,
    })

    if (!canceled) {
      const asset = assets[0]

      const image = new ReactNativeFile({
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName || 'image.jpg',
      })

      try {
        const { data: uploadData } = await uploadImage({
          variables: {
            file: image,
          },
        })

        console.log('uploadData', uploadData)

        if (uploadData) {
          const { uploadMedia } = uploadData

          await updateProfile({
            variables: {
              input: {
                profileImage: uploadMedia.id,
              },
            },
          })

          setProfileForm((prev) => ({
            ...prev,
            profileImage: uploadMedia.url || '',
          }))

          toast({
            title: t('profile.edit.success'),
            haptic: 'success',
            preset: 'custom',
            duration: 3,
            icon: {
              ios: {
                name: 'person.2.fill',
                color: COLORS.magenta[500],
              },
            },
          })
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  useEffect(() => {
    initProfile()
  }, [user])

  if (!user) {
    return null
  }

  return (
    <KeyboardAwareScrollView
      style={[GlobalStyle.container, { flexDirection: 'column' }]}
    >
      <Stack.Screen
        options={{
          title: t('profile.edit.title') || '',
          headerShown: true,
          headerRight: () => {
            return (
              <Pressable
                onPress={() => {
                  handleFormSubmit()
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_BOLD,
                    fontSize: 16,
                    color: COLORS.magenta[500],
                  }}
                >
                  {t('button.save')}
                </Text>
              </Pressable>
            )
          },
        }}
      />

      <View
        style={{
          paddingTop: 24,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            alignItems: 'center',
            marginBottom: 16,
            alignSelf: 'center',
          }}
        >
          <Image
            source={{
              uri: profileForm.profileImage || user.image || '',
              width: 128,
              height: 128,
            }}
            style={{
              borderRadius: 64,
              width: 96,
              height: 96,
            }}
          />
          <Pressable
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              paddingHorizontal: 8,
              paddingVertical: 8,
              backgroundColor: COLORS.magenta[500],
              borderRadius: 96,
            }}
            onPress={handleProfileImageChange}
          >
            <MaterialIcons name="camera_alt" size={16} color={COLORS.white} />
          </Pressable>
        </View>

        <View>
          {ProfileEditSection.map((section, sectionIndex) => {
            return (
              <View
                key={`setting-sections-${sectionIndex}-${section.name}`}
                style={{
                  marginTop: 12,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_BOLD,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    color: COLORS['french-vanilla'][500],
                  }}
                >
                  {t(section.label)}
                </Text>
                <View>
                  {section.items.map((item, index) => {
                    return (
                      <Pressable
                        key={`setting-sections-${sectionIndex}-${section.name}-item-${item.name}`}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingHorizontal: 16,
                          paddingVertical: 12,
                          borderColor: COLORS.soap[100],
                          borderBottomWidth: 1,
                          borderTopWidth: index === 0 ? 1 : 0,
                          gap: 32,
                        }}
                        onPress={() => {}}
                      >
                        <Text
                          style={{
                            fontFamily: FONTS.LSTH_BOLD,
                          }}
                        >
                          {t(item.label)}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            flex: 1,
                          }}
                        >
                          <TextInput
                            style={{
                              fontFamily: FONTS.LSTH_REGULAR,
                              color: COLORS['french-vanilla'][500],
                              fontSize: 14,
                              flex: 1,
                              textAlign: 'right',
                            }}
                            value={profileForm[item.key]}
                            onChange={(e) => {
                              setProfileForm({
                                ...profileForm,
                                [item.key]: e.nativeEvent.text,
                              })
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            editable={!(item.editable === false)}
                          />
                          {/* {item.value ? (
                            <Text
                              style={{
                                fontFamily: FONTS.LSTH_BOLD,
                                color: COLORS['french-vanilla'][500],
                              }}
                            >
                              {t(item.value)}
                            </Text>
                          ) : null} */}
                          {/* {!!item.href || !!item.action ? (
                            <MaterialIcons
                              name="chevron_right"
                              size={24}
                              color={COLORS['french-vanilla'][300]}
                              style={{
                                marginLeft: 12,
                              }}
                            />
                          ) : null} */}
                        </View>
                      </Pressable>
                    )
                  })}
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}
