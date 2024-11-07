import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * Screen
 */
import { ClassScreen } from "../../screens/ClassScreen/ClassScreen";
import { ClassWriteScreen } from "../../screens/ClassScreen/ClassWriteScreen";
import { useFocusEffect } from "@react-navigation/native";

const Stack = createStackNavigator()

export const ClassNavigator:React.FC<{navigation:any}> = ({navigation})=>{
  useFocusEffect(
    React.useCallback(() => {
      navigation.navigate('ClassScreen')
  //     // navigation.replace('ClassScreen')
  //     // navigation.reset({
  //     //   index: 0,
  //     //   routes: [{ name: "ClassScreen" }],
  //     // });
    }, [navigation])
  );
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClassScreen" component={ClassScreen} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="ClassWriteScreen" component={ClassWriteScreen} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}