export const MapStyle = [
  {
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
]

export const PinIcon: Record<string, number> = {
  building: require('../assets/places/building-pin.png'),
  cafe: require('../assets/places/cafe-pin.png'),
  food: require('../assets/places/food-pin.png'),
  'bus-stop': require('../assets/places/bus-stop-pin.png'),
  curbcut: require('../assets/places/curbcut-pin.png'),
  incident: require('../assets/places/incident-pin.png'),
  park: require('../assets/places/park-pin.png'),
  parking: require('../assets/places/parking-pin.png'),
  toilet: require('../assets/places/toilet-pin.png'),
  residence: require('../assets/places/residence-pin.png'),
}
