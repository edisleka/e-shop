import { Link, Stack } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View className='flex-1 bg-[#25292e] justify-center items-center'>
        <Link href='/' style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})
