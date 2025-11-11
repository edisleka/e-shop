import { Stack } from 'expo-router'

const InitialLayout = () => {
  const isAuthenticated = false
  const hasCompletedOnboarding = false
  const isLoading = false

  return (
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
  )
}

export const RootLayout = () => {
  return <InitialLayout />
}

export default RootLayout
