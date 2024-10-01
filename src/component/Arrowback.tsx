import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const ArrowBack: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-2`}>
      <Icon name="arrow-back" size={24} color="black" /> 
      {/* Alternatively, you can try "chevron-back" */}
    </TouchableOpacity>
  );
};

export default ArrowBack;
