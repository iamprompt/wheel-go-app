import type { ComponentProps } from 'react'
import { Place_Types } from '~/generated-types'
import COLORS from '~/styles/colors'
import type { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface IMAP_ICON {
  file: any
  size: {
    width: number
    height: number
  }
  centerOffset: {
    x: number
    y: number
  }
}

interface IPLACE_TYPE_META {
  label: string
  icon: ComponentProps<typeof MaterialIcons>['name']
  color: string
  mapIcon: {
    default: IMAP_ICON
    selected: IMAP_ICON
  }
}

type IPLACE_TYPES = Record<Place_Types, IPLACE_TYPE_META>

export const PLACE_TYPES_META: IPLACE_TYPES = {
  [Place_Types.Building]: {
    label: 'categories.BUILDING',
    icon: 'apartment',
    color: COLORS.info[400],
    mapIcon: {
      default: {
        file: require('~/assets/places/building-pin.png'),
        size: { width: 24, height: 32 },
        centerOffset: { x: 0.5, y: 1 },
      },
      selected: {
        file: require('~/assets/places/building-selected.png'),
        size: { width: 40, height: 46 },
        centerOffset: { x: 0.5, y: 1 },
      },
    },
  },
  // [Place_Types.Incident]: {
  //   label: 'categories.INCIDENT',
  //   icon: 'warning',
  //   color: COLORS.warning[400],
  //   mapIcon: {
  //     default: {
  //       file: require('~/assets/places/incident-pin.png'),
  //       size: { width: 24, height: 32 },
  //       centerOffset: { x: 0.5, y: 1 },
  //     },
  //     selected: {
  //       file: require('~/assets/places/incident-selected.png'),
  //       size: { width: 40, height: 46 },
  //       centerOffset: { x: 0.5, y: 1 },
  //     },
  //   },
  // },
  [Place_Types.Transport]: {
    label: 'categories.TRANSPORT',
    icon: 'directions_bus',
    color: COLORS.indigo[500],
    mapIcon: {
      default: {
        file: require('~/assets/places/bus-stop-pin.png'),
        size: { width: 24, height: 32 },
        centerOffset: { x: 0.5, y: 1 },
      },
      selected: {
        file: require('~/assets/places/bus-stop-selected.png'),
        size: { width: 40, height: 46 },
        centerOffset: { x: 0.5, y: 1 },
      },
    },
  },
  [Place_Types.Cafe]: {
    label: 'categories.CAFE',
    icon: 'coffee',
    color: COLORS.toast[500],
    mapIcon: {
      default: {
        file: require('~/assets/places/cafe-pin.png'),
        size: { width: 24, height: 32 },
        centerOffset: { x: 0.5, y: 1 },
      },
      selected: {
        file: require('~/assets/places/cafe-selected.png'),
        size: { width: 40, height: 46 },
        centerOffset: { x: 0.5, y: 1 },
      },
    },
  },
  [Place_Types.Food]: {
    label: 'categories.FOOD',
    icon: 'restaurant_menu',
    color: COLORS.pomegranate[400],
    mapIcon: {
      default: {
        file: require('~/assets/places/food-pin.png'),
        size: { width: 24, height: 32 },
        centerOffset: { x: 0.5, y: 1 },
      },
      selected: {
        file: require('~/assets/places/food-selected.png'),
        size: { width: 40, height: 46 },
        centerOffset: { x: 0.5, y: 1 },
      },
    },
  },
  [Place_Types.Toilet]: {
    label: 'categories.TOILET',
    icon: 'wc',
    color: COLORS['fruit-punch'][400],
    mapIcon: {
      default: {
        file: require('~/assets/places/toilet-pin.png'),
        size: { width: 24, height: 32 },
        centerOffset: { x: 0.5, y: 1 },
      },
      selected: {
        file: require('~/assets/places/toilet-selected.png'),
        size: { width: 40, height: 46 },
        centerOffset: { x: 0.5, y: 1 },
      },
    },
  },
  [Place_Types.Park]: {
    label: 'categories.PARK',
    icon: 'park',
    color: COLORS.lime[400],
    mapIcon: {
      default: {
        file: require('~/assets/places/park-pin.png'),
        size: { width: 24, height: 32 },
        centerOffset: { x: 0.5, y: 1 },
      },
      selected: {
        file: require('~/assets/places/park-selected.png'),
        size: { width: 40, height: 46 },
        centerOffset: { x: 0.5, y: 1 },
      },
    },
  },
  [Place_Types.Residence]: {
    label: 'categories.RESIDENCE',
    icon: 'cottage',
    color: COLORS.mint[600],
    mapIcon: {
      default: {
        file: require('~/assets/places/residence-pin.png'),
        size: { width: 24, height: 32 },
        centerOffset: { x: 0.5, y: 1 },
      },
      selected: {
        file: require('~/assets/places/residence-selected.png'),
        size: { width: 40, height: 46 },
        centerOffset: { x: 0.5, y: 1 },
      },
    },
  },
  [Place_Types.Curbcut]: {
    label: 'categories.CURBCUT',
    icon: 'accessible',
    color: COLORS.magenta[400],
    mapIcon: {
      default: {
        file: require('~/assets/places/curbcut-pin.png'),
        size: { width: 24, height: 24 },
        centerOffset: { x: 0.5, y: 0.5 },
      },
      selected: {
        file: require('~/assets/places/curbcut-selected.png'),
        size: { width: 40, height: 40 },
        centerOffset: { x: 0.5, y: 0.5 },
      },
    },
  },
  [Place_Types.Parking]: {
    label: 'categories.PARKING',
    icon: 'local_parking',
    color: COLORS.jewel[600],
    mapIcon: {
      default: {
        file: require('~/assets/places/parking-pin.png'),
        size: { width: 24, height: 32 },
        centerOffset: { x: 0.5, y: 1 },
      },
      selected: {
        file: require('~/assets/places/parking-selected.png'),
        size: { width: 40, height: 46 },
        centerOffset: { x: 0.5, y: 1 },
      },
    },
  },
}
