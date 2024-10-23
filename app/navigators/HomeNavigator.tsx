import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Screen
 */
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";

const Stack = createStackNavigator()

export const HomeStackNavigator:React.FC = ()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}