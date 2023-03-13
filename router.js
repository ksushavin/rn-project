import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import HomeScreen from "./Screens/mainScreen/HomeScreen";

import PostsScreen from './Screens/mainScreen/PostsScreen';
import CreatePostsScreen from './Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen';


//icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';



export const useRoute = () => {

    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        
      </AuthStack.Navigator>
      
    );
  }
 
    



// export const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <AuthStack.Navigator>
//         <AuthStack.Screen
//           name="Registration"
//           component={RegistrationScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <AuthStack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//       </AuthStack.Navigator>
//     );
//   }
//   return (
//     <HomeScreen />
//   );
// };