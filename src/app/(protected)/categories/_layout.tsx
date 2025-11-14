import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CategoryLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack>
        <Stack.Screen name='[slug]' options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  )
}
