import { Pressable, Text, View } from 'react-native'

export const SkipBtn = () => {
  return (
    <View className='self-end'>
      <Pressable>
        <Text className='will-change-variable text-primary text-xl'>Skip</Text>
      </Pressable>
    </View>
  )
}
