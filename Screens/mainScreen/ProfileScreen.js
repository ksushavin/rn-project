import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultProfileScreen from "./nestedScreens/DefaultProfileScreen";
import CommentsScreen from "./nestedScreens/CommentsScreen";
import MapScreen from "./nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

const ProfileScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen name="DefaultProfileScreen" component={DefaultProfileScreen} options={{headerShown: false}} />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
    </NestedScreen.Navigator>
  );
};

export default ProfileScreen;