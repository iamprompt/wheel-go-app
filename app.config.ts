import type { ConfigContext, ExpoConfig } from 'expo/config'
import 'dotenv/config'

// React Native Maps: https://docs.expo.dev/versions/latest/sdk/map-view/
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
const WHEELGO_CMS_API = process.env.WHEELGO_CMS_API

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Wheel Go',
  slug: 'wheel-go',
  version: '1.0.1',
  orientation: 'portrait',
  icon: './src/assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    buildNumber: '3',
    supportsTablet: true,
    bundleIdentifier: 'com.nakama.wheelgo',
    config: {
      googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    },
  },
  android: {
    package: 'com.nakama.wheelgo',
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#6A11B1',
    },
    config: {
      googleMaps: {
        apiKey: GOOGLE_MAPS_API_KEY,
      },
    },
  },
  extra: {
    WHEELGO_CMS_API,
    eas: {
      projectId: 'efa55918-84e9-481e-9dcf-716a52dd37ce',
    },
  },
  scheme: 'wheelgo',
  plugins: ['expo-localization'],
})
