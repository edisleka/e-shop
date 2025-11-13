import { Product } from '@/types/product-types'
import { Image, Text, View } from 'react-native'

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <View className='will-change-variable flex-1 bg-surface overflow-hidden mb-3 rounded-xl shadow-sm'>
      <View className='w-full aspect-square'>
        <Image
          source={product.heroImage}
          className='w-full h-full'
          resizeMode='cover'
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
    </View>
  )
}
