import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProductLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name='[slug]' options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  )
}
