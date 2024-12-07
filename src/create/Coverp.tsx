import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import Arrowback from '../component/Arrowback';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigator';

type CoverpScreenProp = StackNavigationProp<RootStackParamList, 'Coverp'>;

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
}

const Coverp = () => {
  const navigation = useNavigation<CoverpScreenProp>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((json: Product[]) => setProducts(json))
      .catch(error => console.error('Error fetching products:', error));
  };

  return (
    <View style={tw`flex-1`}>
      {/* Top Bar with App Name and Search */}
      <View style={tw`flex-row items-center p-5 w-full`}>
        {/* Search Box */}
        <View style={tw`flex-row items-center flex-1 border border-black rounded-lg px-2 py-0.3 bg-white`}>
          <Ionicons name="search" size={20} color="black" style={tw`mr-1`} />
          <TextInput
            placeholder="Search..."
            style={tw`flex-1 text-base text-black`}
            placeholderTextColor="gray"
          />
        </View>
        
        {/* Message Icon */}
        <TouchableOpacity style={tw`ml-3`}>
          <AntDesign name="shoppingcart" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList 
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={tw`w-full flex-row bg-white p-3 mb-3 rounded-lg`}>
            <Image source={{ uri: item.image }} style={tw`w-24 h-24 mr-3 rounded`} />
            <View style={tw`flex-1`}>
              <Text style={tw`text-lg font-semibold text-black mb-1`}>
                {item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title}
              </Text>
              <Text style={tw`text-sm text-gray-500 mb-1`}>
                {item.description.length > 50 ? item.description.substring(0, 50) + '...' : item.description}
              </Text>
              <Text style={tw`text-lg font-semibold text-green-500`}>
                {'$' + item.price}
              </Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={tw`flex-1 p-5`}
      />

      {/* Bottom Button Bar */}
      <View style={tw`absolute bottom-0 w-full flex-row justify-around items-center bg-white p-3 border-t border-gray-200`}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={30} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <AntDesign name="hearto" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <AntDesign name="plussquareo" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={31} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Coverp;
