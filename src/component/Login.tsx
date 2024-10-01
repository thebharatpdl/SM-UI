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

const Login = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>(); // Apply type here

  return (
    <View style={tw`p-5 flex-1 gap-5`}>
      <Arrowback />

      <Text style={tw`text-4xl font-bold text-gray-700`}>Welcome Back !!!</Text>
      <Text style={tw`text-gray-600 text-lg`}>
Please Login to continue      </Text>

    
      <InputEmail />
      <Password />

      <View style={tw`items-end`}>
      <Text style={tw`text-gray-600 text-lg font-bold`}>
      Forgot Password     </Text>
      </View>

      <View>
        <TouchableOpacity
          style={tw`bg-green-500 py-3 px-5 rounded-full items-center justify-center m-2`}
          onPress={() => navigation.navigate('Coverp')} // Navigate to Signup when pressed

       >
          <Text style={tw`text-white text-2xl font-bold`}>Login</Text>
        </TouchableOpacity>

        <Text style={tw`text-gray-600 font-bold text-center mt-3 text-lg`}>
          Don't have an Account!
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
  <Text style={tw`font-semibold text-green-500 text-center`}>SignUp</Text>
</TouchableOpacity>

      </View>
    </View>
  );
};

export default Login;
