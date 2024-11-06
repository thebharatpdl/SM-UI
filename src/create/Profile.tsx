import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Arrowback from '../component/Arrowback';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigator'; // Adjust the path as needed

type AccountScreenProp = StackNavigationProp<RootStackParamList, 'Profile'>; // Change 'Account' to the correct screen name if needed

function Account(): JSX.Element {
  const navigation = useNavigation<AccountScreenProp>(); // Get the navigation object with type

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      {/* Arrowback icon at the top left */}
      <View style={tw`absolute top-5 left-5`}>
        <Arrowback />
      </View>

      {/* Centering the welcome text and buttons */}
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-2xl font-bold mb-5 text-center`}>Hello, Welcome to Appname!</Text>

        <View style={tw`flex-row mt-2`}>
          <TouchableOpacity style={tw`bg-orange-500 py-5 px-8 rounded-lg mr-2`}
              onPress={() => navigation.navigate('Login')}
          >
            <Text style={tw`text-white text-lg font-bold`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`border border-orange-500 py-5 px-8 rounded-lg`}
            onPress={() => navigation.navigate('Signup')} // Navigate to Signup when pressed
          >
            <Text style={tw`text-orange-500 text-lg font-bold`}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Account;
