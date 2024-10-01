import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined; // Home screen does not have any parameters
  Signup: undefined; // Signup screen does not have any parameters
  Login: undefined; // Assuming you have a Login screen
  Coverp: undefined;
  Notification: undefined;
  Profile: undefined;
  CreatePost:undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Coverp'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Notification'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreatePost'>;


