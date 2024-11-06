import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from '../App'; // Home screen
import Signup from '../component/Signup'; // Signup screen
import Login from '../component/Login'; // Login screen
import Coverp from '../create/Coverp'; // Cover page
import CreatePost from '../create/CreatePost'; // Create Post screen
import Notification from '../create/Notification'; // Notification screen
import Profile from '../create/Profile'; // Profile screen

// Define types for the stack navigator routes
type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
  Coverp: undefined;
  Notification: undefined;
  Profile: undefined;
  CreatePost: undefined;
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={App} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Coverp" 
          component={Coverp}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Notification" 
          component={Notification}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CreatePost" 
          component={CreatePost}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
export type { RootStackParamList };
