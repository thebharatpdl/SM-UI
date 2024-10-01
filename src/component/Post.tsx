import React from 'react'
import { Text, View, Image, ImageSourcePropType } from 'react-native'
import tw from 'twrnc'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface PostProps {
  image: ImageSourcePropType;
  name: string;
  date: string;
  title: string;
  postimage: ImageSourcePropType;
}

const Post: React.FC<PostProps> = ({ image, name, date, title, postimage }) => {
  return (
    <View style={tw`border border-gray-400 shadow-lg rounded-lg p-4 bg-white`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Image source={image} style={tw`h-9 w-9 rounded-xl`} />

        <View style={tw`flex-2 ml-3`}>
          <Text style={tw`font-semibold text-lg text-gray-900`}>{name}</Text>
          <Text style={tw`font-semibold text-gray-900`}>{date}</Text>
        </View>

        <Entypo name="dots-three-horizontal" size={20} color="black" style={tw`mr-3`} />
      </View>
      
      <Text style={tw`text-lg font-bold text-gray-800`}>{title}</Text>
      
      <Image source={postimage} style={tw`h-60 w-85 rounded-2xl`} />

      <View style={tw`flex-row gap-3 items-center mt-2`}>
        <AntDesign name="hearto" size={30} color="black" style={tw`mr-3`} />
        <FontAwesome name="comment-o" size={30} color="black" style={tw`mr-3`} />
        <Feather name="share" size={30} color="black" style={tw`mr-3`} />
      </View>
    </View>
  )
}

export default Post
