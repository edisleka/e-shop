import { Product } from '@/types/product-types'
import { Link } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/product/${product.slug}` as any}
      asChild
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <Pressable className='will-change-variable flex-1 overflow-hidden mb-3 rounded-xl shadow-sm'>
        <View className='w-full rounded-xl h-38 p-4'>
          <Image
            source={product.heroImage}
            className='w-full h-full'
            resizeMode='contain'
          />
        </View>
        <View className='will-change-variable p-3 gap-1'>
          <Text
            className='will-change-variable text-sm text-foreground leading-5'
            numberOfLines={1}
          >
            {product.title}
          </Text>
          <Text className='will-change-variable text-base font-bold text-foreground mt-1'>
            ${product.price.toFixed(2)}
          </Text>
        </View>
      </Pressable>
    </Link>
  )
}
