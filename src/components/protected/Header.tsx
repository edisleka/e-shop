import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Header({ title }: { title: string }) {
  const router = useRouter()

  return (
    <View className='bg-white border-b border-gray-200 shadow-sm'>
      <View className='flex-row items-center justify-between px-4'>
        <TouchableOpacity
          onPress={() => router.back()}
          className='w-10 h-10 items-center justify-center rounded-full bg-gray-50 active:bg-gray-100'
        >
          <Ionicons name='arrow-back' size={22} color='#1f2937' />
        </TouchableOpacity>

        <View className='absolute left-0 right-0 items-center pointer-events-none'>
          <Text className='text-xl font-semibold text-gray-900 tracking-tight'>
            {title}
          </Text>
        </View>

        <View className='w-10' />
      </View>
    </View>
  )
}
