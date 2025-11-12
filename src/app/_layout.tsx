import { useOnboardingStore } from '@/store/onboardingStore'
import '@root/global.css'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const InitialLayout = () => {
  const { hasCompletedOnboarding } = useOnboardingStore()
  const isAuthenticated = false
  const isLoading = false

  return (
    <>
      <StatusBar style='auto' />
      <Stack>
        <Stack.Protected guard={!hasCompletedOnboarding && !isAuthenticated}>
          <Stack.Screen name='(onboarding)' options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={hasCompletedOnboarding && !isAuthenticated}>
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={isAuthenticated && hasCompletedOnboarding}>
          <Stack.Screen name='(protected)' options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </>
  )
}

export const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <InitialLayout />
    </GestureHandlerRootView>
  )
}

export default RootLayout
