import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import App from '../App'; // Adjust the import path if needed
import Signup from '../component/Signup';
import Login from '../component/Login';
import Coverp from '../create/Coverp';
import CreatePost from '../create/CreatePost';
import Notification from '../create/Notification';
import Profile from '../create/Profile';

// Define types for the stack navigator routes
type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
  Coverp: undefined;     // Added Coverp to the route list
  Notification: undefined;
Profile:undefined;
CreatePost:undefined;
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
