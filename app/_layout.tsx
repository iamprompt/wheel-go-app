import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Slot } from 'expo-router'

import '../utils/network'

const RootLayout = () => {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <Slot />
      </QueryClientProvider>
    </>
  )
}

export default RootLayout
