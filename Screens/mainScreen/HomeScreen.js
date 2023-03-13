import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const MainTab = createBottomTabNavigator();

import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

//icons
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
        <MainTab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: [
                styles.TabBarStyle
            ]
        }}>
            <MainTab.Screen
                name="PostsScreen"
                component={PostsScreen}
                
                options={({ route }) => ({
                    tabBarStyle: {
                        ...styles.TabBarStyle,
                        display: getTabBarVisibility(route) },
                        headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <AntDesign
                            name="appstore-o"
                            size={size}
                            color={"#BDBDBD"}
                        />
                    )
                })}
            >
            </MainTab.Screen>
            
            <MainTab.Screen
                name='CreatePosts'
                component={CreatePostsScreen}
                options={{
                    tabBarStyle: {display: 'none'},
                    title: 'Створити публікацію',
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
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{marginLeft: 10}}
                            activeOpacity={0.7}
                            onPress={() => navigation.navigate('PostsScreen')}>
                                <MaterialIcons name="arrow-back" size={24} color="rgba(33, 33, 33, 0.8)" />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ focused, size, color }) => (
                        <View style={styles.iconWrapper}>
                            <Ionicons
                                name="add"
                                size={23}
                                color={'#FFFFFF'}
                            />
                        </View>
                    )
                }}>  
            </MainTab.Screen>
            
            <MainTab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => (
                        <Feather
                            name="user"
                            size={size}
                            color={"#BDBDBD"}
                        />
                    )
                }}> 
            </MainTab.Screen>
        </MainTab.Navigator>
    ) 
}

const getTabBarVisibility = (route) => {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'PostsScreen';

  switch (routeName) {
    case 'Map':
      return 'none';
    case 'Comments':
        return 'none';
    default:
        return 'flex';
  }
}

const styles = StyleSheet.create({
    TabBarStyle: {
        height: 83,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 24,
    },
    iconWrapper: {
        width: 70,
        height: 40,
        backgroundColor: '#FF6C00',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    } 
})

export default HomeScreen;