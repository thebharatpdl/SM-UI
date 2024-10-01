import { AppRegistry } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator'; // Adjust the import path
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MainNavigator);
