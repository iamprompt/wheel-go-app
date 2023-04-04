import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import Button, { ButtonVariant } from './Button'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface TracingSaveModalProps {
  onClose: () => void
  onAction?: () => void
}

export const TracingSaveModal: FC<TracingSaveModalProps> = ({
  onClose,
  onAction,
}) => {
  const { t } = useTranslation()

  return (
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
            name="save"
            size={32}
            color={COLORS.info[400]}
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
            {t('trace.save_modal.title')}
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
          {t('trace.save_modal.description')}
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
          fullWidth
        />
        <Button
          label={t('button.save')}
          onPress={() => {
            onAction?.()
            onClose()
          }}
          fullWidth
        />
      </View>
    </View>
  )
}