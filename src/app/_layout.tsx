import 'react-native-reanimated'

import {
  Karla_400Regular,
  Karla_600SemiBold,
  Karla_700Bold,
  useFonts,
} from '@expo-google-fonts/karla'
import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { PaperProvider } from 'react-native-paper'

import { theme } from '@/utils/theme'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

export default function RootLayout() {
  const [areFontsLoaded, fontsError] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
    Karla_600SemiBold,
  })

  useEffect(() => {
    if (fontsError) throw fontsError
  }, [fontsError])

  if (!areFontsLoaded) {
    return null
  }

  return (
    <PaperProvider theme={theme}>
      <RootLayoutNav />
    </PaperProvider>
  )
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}
