import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from './navigation/navigation'; // Adjust the import if necessary

const App: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Specify the type for navigation

  return (
    <View style={tw`flex-1 p-5 justify-evenly items-center`}>
      <Image source={require('../assets/image/welcome-back.png')} style={tw`h-70 w-60`} />

      <Text style={tw`text-4xl font-bold text-green-700 text-center`}>
        ABCD!
      </Text>

      <View>
        <Text style={tw`-mt-10 text-center text-lg text-gray-600`}>
          Be yourself; everyone else is already taken.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={tw`bg-green-500 py-3 px-5 rounded-full items-center justify-center m-2`}
          onPress={() => navigation.navigate('Signup')} // Navigate to Signup when pressed
        >
          <Text style={tw`text-white text-2xl font-bold`}>Getting Started</Text>
        </TouchableOpacity>

        <Text style={tw`text-gray-600 font-bold text-center mt-3 text-lg`}>
          Already have an Account!
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={tw`font-semibold text-green-500 text-center`}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
