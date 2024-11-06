import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Screen
 */
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { useFocusEffect } from "@react-navigation/native";

const Stack = createStackNavigator()

export const HomeStackNavigator:React.FC<{navigation:any}> = ({navigation})=>{
  useFocusEffect(
    React.useCallback(()=>{
      navigation.navigate('HomeScreen')
      // navigation.popToTop();
      // navigation.navigate('HomeScreen');
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: "HomeScreen" }],
      // });
    },[navigation])
  )
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}