import { ProductListItem } from '@/components/protected/ProductListItem'
import { PRODUCTS } from '@data/products-data'
import { LegendList } from '@legendapp/list'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <View className='flex-1 bg-background'>
      <LegendList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={({ id }) => id.toString()}
        numColumns={2}
        ListHeaderComponent={
          <Text className='will-change-variable text-2xl font-bold mb-4 text-foreground'>
            Products
          </Text>
        }
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
        recycleItems
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  columnWrapper: {
    gap: 12,
    justifyContent: 'space-between',
  },
  list: {
    flex: 1,
  },
})
