import { forwardRef } from 'react'
import type { MapPolyline, MapPolylineProps } from 'react-native-maps'
import { Polyline } from 'react-native-maps'

export const WGPolyline = forwardRef<
  MapPolyline,
  Omit<MapPolylineProps, 'strokeWidth' | 'strokeColor'>
>((props, ref) => {
  return (
    <Polyline
      {...props}
      ref={ref}
      strokeWidth={2.5}
      strokeColor={'rgba(67, 196, 99, 0.5)'}
    />
  )
})
