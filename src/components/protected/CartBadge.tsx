import { useCartStore } from '@/store/cartStore'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function CartBadge() {
  const items = useCartStore((state) => state.items)
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <Link href='/cart' asChild>
      <Pressable>
        {({ pressed }) => (
          <View>
            <FontAwesome
              name='shopping-cart'
              size={24}
              color='gray'
              style={{ opacity: pressed ? 0.5 : 1 }}
            />

            <View className='absolute -top-1.5 right-2.5 bg-success rounded-xl w-4 h-4 justify-center items-center'>
              <Text className='text-white text-[10px] font-bold'>
                {itemCount}
              </Text>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  )
}
