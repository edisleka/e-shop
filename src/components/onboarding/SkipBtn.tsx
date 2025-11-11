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
  },
  skipBtnText: {
    color: 'white',
    fontSize: 20,
  },
})
