import type { ConfigContext, ExpoConfig } from 'expo/config'
import dotenv from 'dotenv'

dotenv.config()

// React Native Maps: https://docs.expo.dev/versions/latest/sdk/map-view/
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'wheel-go-rn',
  slug: 'wheel-go-rn',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.nakama.wheelgo',
    config: {
      googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    config: {
      googleMaps: {
        apiKey: GOOGLE_MAPS_API_KEY,
      },
    },
  },
  extra: {
    WHEELGO_CMS_API: process.env.WHEELGO_CMS_API,
  },
  scheme: 'wheelgo',
})
