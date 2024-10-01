import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Arrowback from './Arrowback';
import InputName from './InputName';
import InputEmail from './InputEmail';
import Password from './Password';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigator'

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

const Signup = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>(); // Apply type here

  return (
    <View style={tw`p-5 flex-1 gap-5`}>
      <Arrowback />

      <Text style={tw`text-4xl font-bold text-gray-700`}>Let's Get Started!</Text>
      <Text style={tw`text-gray-600 text-lg`}>
        Please fill the details to create the Account
      </Text>

      <InputName />
      <InputEmail />
      <Password />

      <View>
        <TouchableOpacity
          style={tw`bg-green-500 py-3 px-5 rounded-full items-center justify-center m-2`}
        >
          <Text style={tw`text-white text-2xl font-bold`}>SignUp</Text>
        </TouchableOpacity>

        <Text style={tw`text-gray-600 font-bold text-center mt-3 text-lg`}>
          Already have an Account!
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={tw`font-semibold text-green-500 text-center`}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
