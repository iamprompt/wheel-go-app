import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, Pressable, Text, View } from 'react-native'
import * as Linking from 'expo-linking'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface HelpModalProps {
  isVisible: boolean
  onClose: () => void
}

const HelpModal: FC<HelpModalProps> = ({ isVisible, onClose }) => {
  const { t } = useTranslation()

  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: COLORS.magenta[600],
          opacity: 0.6,
          flex: 1,
        }}
      />
      <View
        style={{
          padding: 16,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            paddingHorizontal: 16,
            paddingVertical: 24,
            borderRadius: 12,
            width: '100%',
            maxWidth: 512,
          }}
        >
          <View
            style={{
              marginBottom: 24,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12,
              }}
            >
              <MaterialIcons
                name="warning"
                size={32}
                style={{
                  color: COLORS.warning[400],
                  marginRight: 12,
                }}
              />
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 20,
                  textAlign: 'center',
                }}
              >
                {t('helpModal.title')}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: FONTS.LSTH_REGULAR,
                fontSize: 14,
                textAlign: 'center',
                color: COLORS['french-vanilla'][500],
              }}
            >
              {t('helpModal.description')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
            }}
          >
            <Pressable
              onPress={onClose}
              style={{
                borderRadius: 12,
                flex: 1,
                height: 48,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 16,
                }}
              >
                {t('button.cancel')}
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                Linking.openURL('https://www.facebook.com/DSS.Mahidol.Page/')
                onClose()
              }}
              style={{
                borderRadius: 12,
                flex: 1,
                height: 48,
                backgroundColor: COLORS.magenta[500],
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.LSTH_BOLD,
                  fontSize: 16,
                  color: COLORS.white,
                }}
              >
                {t('button.go')}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default HelpModal
