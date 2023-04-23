import type { FC, Reducer } from 'react'
import { useMemo, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Switch, Text, View } from 'react-native'
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
  const [selectedPrefs, dispatch] = useReducer<
    Reducer<
      Record<string, boolean>,
      {
        type: 'toggle' | 'setAll' | 'resetAll'
        payload?: string
      }
    >
  >((state, action) => {
    switch (action.type) {
      case 'toggle':
        if (!action.payload) {
          return state
        }

        return {
          ...state,
          [action.payload]: !state[action.payload],
        }
      case 'setAll':
        return {
          ...state,
          ...Object.keys(PLACE_TYPES_META).reduce((acc, key) => {
            acc[key] = true
            return acc
          }, {} as Record<string, boolean>),
        }
      case 'resetAll':
        return {}
      default:
        return state
    }
  }, {})

  const isSelectAll = useMemo(() => {
    return Object.keys(PLACE_TYPES_META).every((key) => selectedPrefs[key])
  }, [selectedPrefs])

  const handleSelectAll = (value: boolean) => {
    dispatch({
      type: value ? 'setAll' : 'resetAll',
    })
  }

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
      <View
        style={{
          gap: 24,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 14,
            }}
          >
            Surrounding Conditions
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 14,
            }}
          >
            Places
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 12,
              marginTop: 12,
            }}
          >
            {Object.entries(PLACE_TYPES_META).map(([key, value]) => (
              <Pressable
                key={`map-prefs-place-type-${key}`}
                onPress={() => {
                  dispatch({
                    type: 'toggle',
                    payload: key,
                  })
                }}
              >
                <Tag
                  label={value.label}
                  height={32}
                  icon={value.icon}
                  iconPosition="left"
                  iconSize={24}
                  textColor={
                    selectedPrefs[key]
                      ? value.color
                      : COLORS['french-vanilla'][300]
                  }
                />
              </Pressable>
            ))}
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            gap: 12,
          }}
        >
          <Text>{t('MapPrefsModal.selectAll')}</Text>
          <Switch
            value={isSelectAll}
            onValueChange={(value) => handleSelectAll(value)}
            trackColor={{
              false: COLORS['french-vanilla'][200],
              true: COLORS.magenta[500],
            }}
            style={{
              transform: [{ scaleX: 0.774 }, { scaleY: 0.774 }],
            }}
          />
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
          variant={ButtonVariant.Secondary}
          onPress={onClose}
          fullWidth
        />
        <Button
          label={t('button.confirm')}
          onPress={() => {
            onClose()
          }}
          fullWidth
        />
      </View>
    </View>
  )
}
