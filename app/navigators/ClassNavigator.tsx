import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Screen
 */
import { ClassScreen } from "../screens/ClassScreen/ClassScreen";

const Stack = createStackNavigator()

export const ClassNavigator:React.FC = ()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClassScreen" component={ClassScreen} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}