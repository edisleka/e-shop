import { lightColors } from '@/constants/COLORS'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export const SkipBtn = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.skipBtnText}>Skip</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    backgroundColor: lightColors.success,
  },
  skipBtnText: {
    color: lightColors.text,
    fontSize: 20,
  },
})
