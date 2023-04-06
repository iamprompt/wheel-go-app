import { Image } from 'expo-image'
import type { ComponentProps } from 'react'
import { View } from 'react-native'
import COLORS from '~/styles/colors'

type ImageWithFallbackProps = Omit<
  ComponentProps<typeof Image>,
  'source' | 'style'
> & {
  src?: string | null
  width: number | string
  height: number | string
}

export function ImageWithFallback({
  src,
  width,
  height,
  ...props
}: ImageWithFallbackProps) {
  if (!src) {
    return (
      <View
        style={{
          width,
          height,
          backgroundColor: COLORS.soap[100],
        }}
      />
    )
  }

  return (
    <Image
      source={src}
      style={{
        width,
        height,
      }}
      {...props}
    />
  )
}
