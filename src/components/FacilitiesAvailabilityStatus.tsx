import { View } from 'react-native'
import { HorizontalDivider } from './HorizontalDivider'
import COLORS from '~/styles/colors'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { FACILITIES } from '~/const/facility'

export enum AvailabilityStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  WARNING = 'WARNING',
}

interface FacilitiesAvailabilityStatusProps {
  ramp: AvailabilityStatus
  assistance: AvailabilityStatus
  elevator: AvailabilityStatus
  toilet: AvailabilityStatus
  parking: AvailabilityStatus
  surface: AvailabilityStatus
}

export function AvailabilityIcon({
  availability,
}: {
  availability: AvailabilityStatus
}) {
  switch (availability) {
    case AvailabilityStatus.AVAILABLE:
      return (
        <MaterialIcons
          name="check_circle"
          size={16}
          color={COLORS.success[400]}
        />
      )
    case AvailabilityStatus.UNAVAILABLE:
      return <MaterialIcons name="cancel" size={16} color={COLORS.error[500]} />
    case AvailabilityStatus.WARNING:
      return (
        <MaterialIcons name="warning" size={16} color={COLORS.warning[300]} />
      )
  }
}

export function FacilitiesAvailabilityStatus({
  ...props
}: FacilitiesAvailabilityStatusProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {Object.entries(FACILITIES).map(([key, { icon }]) => {
        return (
          <View
            key={key}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 8,
              gap: 4,
            }}
          >
            <MaterialIcons name={icon} size={24} />
            <HorizontalDivider width={24} />
            <AvailabilityIcon
              availability={
                props[key as keyof FacilitiesAvailabilityStatusProps]
              }
            />
          </View>
        )
      })}
    </View>
  )
}
