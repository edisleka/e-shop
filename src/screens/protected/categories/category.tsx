import Header from '@/components/protected/Header'
import { CATEGORIES } from '@/data/categories-data'
import { Category as CategoryType } from '@/types/category-types'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Category() {
  const { slug } = useLocalSearchParams<{ slug: string }>()
  const category = CATEGORIES.find(
    (category: CategoryType) => category.slug === slug
  )
  if (!category) return <Redirect href='/+not-found' />

  return (
    <View className='flex-1 bg-surface'>
      <Header title={category.name} />
      <Text className='text-2xl font-bold'>{category.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  categoryName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productsList: {
    flexGrow: 1,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    margin: 8,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
})
