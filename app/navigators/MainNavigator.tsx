import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Navigator
 */
import {TabNavigator} from './TabNavigator'
import { LoginScreen } from "../screens/HomeScreen/LoginScreen";
import { SignUpScreen } from "../screens/HomeScreen/SignUpScreen";
import { SignUpScreen2 } from "../screens/HomeScreen/SignUpScreen2";
import { SignUpScreen3 } from "../screens/HomeScreen/SignUpScreen3";
import { ClassDetailNavigator } from "./class/ClassDetailNavigator";

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()
export const MainTabNavigator = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigator} options={{headerShown : false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown : false}}/>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown : false}}/>
      <Stack.Screen name="SignUpScreen2" component={SignUpScreen2} options={{headerShown : false}}/>
      <Stack.Screen name="SignUpScreen3" component={SignUpScreen3} options={{headerShown : false}}/>
      <Stack.Screen name="ClassDetail" component={ClassDetailNavigator} options={{headerShown : false}}/>
    </Stack.Navigator>
  )
}
