import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal, Text, View } from 'react-native'
import * as Linking from 'expo-linking'
import Button, { ButtonVariant } from './Button'
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
                color={COLORS.warning[400]}
                style={{
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
            <Button
              label={t('button.cancel')}
              variant={ButtonVariant.Text}
              onPress={onClose}
            />
            <Button
              label={t('button.go')}
              onPress={() => {
                Linking.openURL('https://www.facebook.com/DSS.Mahidol.Page/')
                onClose()
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default HelpModal
