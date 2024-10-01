import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Post from '../component/Post'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/MainNavigator'


type CoverpScreenProp = StackNavigationProp<RootStackParamList, 'Coverp'>;

const Coverp = () => {
  const navigation = useNavigation<CoverpScreenProp>();

  return (
    <View style={tw`p-5 flex-1 gap-5`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-4xl font-bold text-gray-900`}> LinkUp </Text>

        <View style={tw`flex-row gap-3 items-center`}>
          <AntDesign
            name="hearto"
            size={30}
            color="black"
            style={tw`mr-3`}
            onPress={() => navigation.navigate('Notification')} // Correctly typed navigation
          />
          <AntDesign name="plussquareo" size={30} color="black" style={tw`mr-3`} 
           onPress={() => navigation.navigate('CreatePost')}/>

          <Ionicons name="person" size={30} color="black" style={tw`mr-3`} 
           onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Post
          image={require('../images/pro1.jpg')}
          name="Spaqoo"
          date="12 jun 2021"
          title='"Turning ideas into code. 💻 #TechJourney #CodingLife"'
          postimage={require('../images/image1.jpg')}
        />
        <Post
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
        />
      </ScrollView>
    </View>
  )
}

export default Coverp
