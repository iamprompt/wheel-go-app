import type { ComponentProps } from 'react'
import { View } from 'react-native'
import { HorizontalDivider } from './HorizontalDivider'
import COLORS from '~/styles/colors'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

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

type FacilitiesKey = Record<
  keyof FacilitiesAvailabilityStatusProps,
  {
    label: string
    icon: ComponentProps<typeof MaterialIcons>['name']
  }
>

const FACILITIES = {
  ramp: {
    label: 'ramp',
    icon: 'signal_cellular_4_bar',
  },
  assistance: {
    label: 'assistance',
    icon: 'wheelchair_pickup',
  },
  toilet: {
    label: 'toilet',
    icon: 'wc',
  },
  elevator: {
    label: 'elevator',
    icon: 'elevator',
  },
  parking: {
    label: 'parking',
    icon: 'local_parking',
  },
  surface: {
    label: 'surface',
    icon: 'texture',
  },
} satisfies FacilitiesKey

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
      {Object.entries(FACILITIES).map(([key, { label, icon }]) => {
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
