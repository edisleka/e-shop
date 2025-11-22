import CartBadge from '@/components/protected/CartBadge'
import { CATEGORIES } from '@/data/categories-data'
import { FontAwesome } from '@expo/vector-icons'
import { LegendList } from '@legendapp/list'
import { Link } from 'expo-router'
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
// import Toast from 'react-native-toast-message'

export const ListHeader = () => {
  // const showToast = () => {
  //   Toast.show({
  //     type: 'success',
  //     text1: 'Hello',
  //     text2: 'This is some something 👋',
  //   })
  // }

  return (
    <View className='gap-5 mb-5'>
      <View className='flex-row justify-between items-center'>
        <View className='flex-row items-center'>
          <View className='flex-row items-center'>
            <Image
              source={{ uri: 'https://avatar.iran.liara.run/public/34' }}
              className='w-10 h-10 rounded-full mr-2.5'
            />
            <Text>Hello edisleka</Text>
          </View>
        </View>

        <View className='flex-row items-center gap-4'>
          <CartBadge />
          <TouchableOpacity style={styles.signOutButton}>
            <FontAwesome name='sign-out' size={25} color='red' />
          </TouchableOpacity>
        </View>
      </View>

      <View className='w-full h-50'>
        <Image
          source={require('@img/e-shop/banner.jpg')}
          className='w-full h-full rounded-3xl'
          resizeMode='cover'
        />
      </View>

      <View className=''>
        <Text className='text-2xl font-bold mb-2.5'>Categories</Text>
        <LegendList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <Link href={`/categories/${item.slug}`} asChild>
              <Pressable style={styles.category}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryText}>{item.name}</Text>
              </Pressable>
            </Link>
          )}
          keyExtractor={(item) => item.name}
          recycleItems
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    gap: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  avatarText: {
    fontSize: 16,
  },
  cartContainer: {
    padding: 10,
  },
  signOutButton: {
    // padding: 10,
  },
  heroContainer: {
    width: '100%',
    height: 200,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  categoriesContainer: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    marginRight: 16,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    textAlign: 'center',
  },
  categoriesListContent: {
    paddingRight: 16,
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: 10,
    backgroundColor: '#1BC464',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
})
