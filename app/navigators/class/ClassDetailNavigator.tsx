import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

/* SCREEN */
import { ClassDetailScreen } from "../../screens/ClassScreen/ClassDetailScreen";
import { useFocusEffect } from "@react-navigation/native";

export const ClassDetailNavigator:React.FC<{navigation:any}> = ({navigation})=>{

  useFocusEffect(
    useCallback(()=>{
      navigation.navigate('ClassDetailScreen')
    },[])
  )
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClassDetailScreen" component={ClassDetailScreen} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}
