import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'
import { HorizontalDivider } from './HorizontalDivider'
import type { BADGES } from '~/const/badges'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface BadgeModalProps {
  onClose: () => void
  badge: (typeof BADGES)[keyof typeof BADGES]
}

export function BadgeModal({ onClose, badge }: BadgeModalProps) {
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
      <Pressable
        onPress={() => {
          console.log('close')
          onClose()
        }}
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          zIndex: 1,
        }}
      >
        <MaterialIcons
          name="close"
          size={24}
          color={COLORS['french-vanilla'][500]}
        />
      </Pressable>
      <View>
        <View
          style={{
            paddingVertical: 12,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              borderColor: badge.color,
              borderWidth: 2,
              borderRadius: 100,
              width: 80,
              height: 80,
              marginBottom: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialIcons name={badge.icon} size={52} color={badge.color} />
          </View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 24,
              marginBottom: 8,
              textAlign: 'center',
              color: badge.color,
            }}
          >
            {t(badge.label)}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 12,
              textAlign: 'center',
              color: COLORS['french-vanilla'][500],
            }}
          >
            {t(badge.description)}
          </Text>
        </View>
        {badge.missions && badge.missions.length > 0 ? (
          <>
            <HorizontalDivider />
            <View
              style={{
                paddingVertical: 12,
              }}
            >
              {badge.missions?.map((mission) => {
                return (
                  <View
                    key={mission.title}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 12,
                      }}
                    >
                      <View
                        style={{
                          padding: 8,
                          borderRadius: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderColor: COLORS['french-vanilla'][300],
                          borderWidth: 1,
                        }}
                      >
                        <MaterialIcons
                          name={mission.icon}
                          size={24}
                          color={COLORS.magenta[500]}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: FONTS.LSTH_BOLD,
                            fontSize: 14,
                          }}
                        >
                          {t(`badges.${mission.title}`)}
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONTS.LSTH_REGULAR,
                            fontSize: 12,
                            color: COLORS['french-vanilla'][500],
                          }}
                        >
                          {t(`${mission.description}`, {
                            count: mission.total || 0,
                          })}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: FONTS.LSTH_REGULAR,
                          fontSize: 12,
                          color: COLORS.magenta[500],
                        }}
                      >
                        {mission.progress}
                      </Text>
                      <HorizontalDivider />
                      <Text
                        style={{
                          fontFamily: FONTS.LSTH_REGULAR,
                          fontSize: 12,
                          color: COLORS['french-vanilla'][500],
                        }}
                      >
                        {mission.total}
                      </Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </>
        ) : null}
      </View>
    </View>
  )
}
