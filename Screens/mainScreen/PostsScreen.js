import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "./nestedScreens/DefaultPostsScreen";
import CommentsScreen from "./nestedScreens/CommentsScreen";
import MapScreen from "./nestedScreens/MapScreen";
import { MaterialIcons } from '@expo/vector-icons';
import {
    TouchableOpacity
} from 'react-native';

const NestedScreen = createStackNavigator();

const PostsScreen = ({navigation}) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{
          title: 'Публікації',
          headerLeft: ()=> null,
          headerStyle: {
              height: 95,
              borderBottomWidth: 1,
              borderBottomColor: '#BDBDBD',
          },
          headerTintColor: '#212121',
          headerTitleStyle: {
              fontWeight: '500',
              fontFamily: 'Roboto-Medium',
              fontSize: 17,
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Login')}>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          )
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: 'Коментарі',
          headerStyle: {
            height: 95,
            borderBottomWidth: 1,
            borderBottomColor: '#BDBDBD',
          },
          headerTintColor: '#212121',
          headerTitleStyle: {
            fontWeight: '500',
            fontFamily: 'Roboto-Medium',
            fontSize: 17,
          },
          headerTitleAlign: 'center'
        }} />
      <NestedScreen.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;