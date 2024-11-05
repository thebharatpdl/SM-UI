import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Entypo from 'react-native-vector-icons/Entypo';

import Post from '../component/Post';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigator';

type CoverpScreenProp = StackNavigationProp<RootStackParamList, 'Coverp'>;

const Coverp = () => {
  const navigation = useNavigation<CoverpScreenProp>();

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
    <Feather name="message-square" size={30} color="black" />
  </TouchableOpacity>
</View>



      <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1 p-5`}>
        {/* <Post
          image={require('../images/pro1.jpg')}
          name="Spaqoo"
          date="12 jun 2021"
          title='"Turning ideas into code. 💻 #TechJourney #CodingLife"'
          postimage={require('../images/image1.jpg')}
        /> */}
        {/* <Post
          image={require('../images/pro2.jpg')}
          name="Joe"
          date="15 may 2023"
          title='"Living life one wag at a time. 🐕 #HappyTails"'
          postimage={require('../images/image2.jpg')}
        />
        <Post
          image={require('../images/pro3.jpg')}
          name="Smith"
          date="22 Dec 2024"
          title='"Code today, innovate tomorrow. 🔥 #DeveloperLife"'
          postimage={require('../images/image3.jpg')}
        />
        <Post
          image={require('../images/pro4.jpg')}
          name="Thomas"
          date="30 jun 2024"
          title='"Wild hearts can`t be tamed. 🐾 #AnimalLovers"'
          postimage={require('../images/image4.jpg')}
        />
        <Post
          image={require('../images/pro5.jpg')}
          name="David"
          date="21 jun 2022"
          title='"Born to be wild. 🌿🦒 #NatureVibes"'
          postimage={require('../images/image2.jpg')}
        /> */}
      </ScrollView>

      {/* Bottom Button Bar */}
      <View style={tw`absolute bottom-0 w-full flex-row justify-around items-center bg-white p-3 border-t border-gray-200`}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Entypo name="home" size={30} color="black" />
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <AntDesign name="hearto" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <AntDesign name="plussquareo" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons
 name="person" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Coverp;
