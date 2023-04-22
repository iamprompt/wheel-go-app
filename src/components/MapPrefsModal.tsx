import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import * as Linking from 'expo-linking'
import Button, { ButtonVariant } from './Button'
import { HorizontalDivider } from './HorizontalDivider'
import { Tag } from './common/Tag'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { PLACE_TYPES_META } from '~/const/placeTypes'

interface MapPrefsModalProps {
  onClose: () => void
  onAction?: () => void
}

export const MapPrefsModal: FC<MapPrefsModalProps> = ({ onClose }) => {
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
        gap: 24,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            {t('MapPrefsModal.title')}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: FONTS.LSTH_REGULAR,
            fontSize: 12,
            textAlign: 'center',
            color: COLORS['french-vanilla'][500],
          }}
        >
          {t('MapPrefsModal.description')}
        </Text>
      </View>
      <HorizontalDivider />
      <View>
        <View>
          <Text>Surrounding Conditions</Text>
        </View>
        <View>
          <Text>Places</Text>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            {Object.entries(PLACE_TYPES_META).map(([key, value]) => (
              <Tag
                key={`map-prefs-place-type-${key}`}
                label={value.label}
                height={32}
                icon={value.icon}
                iconPosition="left"
                iconSize={24}
                textColor={value.color}
              />
            ))}
          </View>
        </View>
      </View>
      <HorizontalDivider />
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
          label={t('button.go')}
          onPress={() => {
            Linking.openURL('https://www.facebook.com/DSS.Mahidol.Page/')
            onClose()
          }}
          fullWidth
        />
      </View>
    </View>
  )
}
