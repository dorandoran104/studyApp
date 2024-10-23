import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Screen
 */

import { MyPageScreen } from "../screens/MyPageScreen";

const Stack = createStackNavigator()

export const MyPageNavigator:React.FC = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="MyPageScreen" component={MyPageScreen} options={{headerShown :false}}/>
    </Stack.Navigator>
  )
}