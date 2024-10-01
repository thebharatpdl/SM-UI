import React from 'react';
import { View, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';

const Password = () => {
  return (
    <View style={tw`border border-gray-400 rounded-xl flex-row p-3 items-center`}>
      <AntDesign name="lock" size={30} color="black" style={tw`mr-3`} />
      <TextInput 
        placeholder='Enter Password' 
        style={tw`flex-1 text-gray-600 text-lg font-bold`} 
      />
    </View>
  );
}

export default Password;