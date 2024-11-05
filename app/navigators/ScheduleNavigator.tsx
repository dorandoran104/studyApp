import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Screen
 */
import { ScheduleScreen } from "../screens/ScheduleScreen/ScheduleScreen";

const Stack = createStackNavigator()

export const ScheduleNavigator:React.FC = ()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}