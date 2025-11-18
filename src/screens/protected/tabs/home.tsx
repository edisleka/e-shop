import { ProductListItem } from '@/components/protected/ProductListItem'
import { PRODUCTS } from '@data/products-data'
import { LegendList } from '@legendapp/list'
import { StyleSheet, View } from 'react-native'

import { ListHeader } from '@/components/protected/ListHeader'
import { Product } from '@/types/product-types'

export default function Index() {
  return (
    <View className='flex-1 bg-background'>
      <LegendList
        data={PRODUCTS}
        renderItem={({ item }: { item: Product }) => (
          <ProductListItem product={item} />
        )}
        keyExtractor={({ id }) => id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={{ gap: 8 }}
        recycleItems
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
})
