import React from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

const InputName = () => {
  return (
    <View style={tw`border border-gray-400 rounded-xl flex-row p-3 items-center`}>
      <FontAwesome name="user" size={25} color="black" style={tw`mr-3`} />
      <TextInput 
        placeholder='Enter your Name' 
        style={tw`flex-1 text-gray-600 text-lg font-bold`} 
      />
    </View>
  );
}

export default InputName;
