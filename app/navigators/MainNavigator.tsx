import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Navigator
 */
import { HomeStackNavigator } from "./HomeNavigator"
import { MyPageNavigator } from "./MyPageNavigator";
import {TabNavigator} from './TabNavigator'
import { LoginScreen } from "../screens/LoginScreen";

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()
export const MainTabNavigator = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigator} options={{headerShown : false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown : false}}/>
    </Stack.Navigator>
    // <Tab.Navigator
    //   screenOptions={{
    //     tabBarActiveTintColor: '#ca84f2', // 활성 탭 색상
    //     tabBarInactiveTintColor: 'gray',  // 비활성 탭 색상
    //     tabBarItemStyle : {
    //       borderRadius : 10
    //     }
    //   }}
    // >
      
    //   <Tab.Screen 
    //     name="Home" 
    //     component={HomeStackNavigator} 
    //     options={{
    //       headerShown : false
    //       ,tabBarLabel : "메인"
    //       ,tabBarIcon : ({color,focused})=>(
    //           <Ionicons
    //             name={focused ? 'home' : 'home-outline'} // 선택 상태에 따라 아이콘 변경
    //             size={24}
    //             color={color} // 활성/비활성 색상 적용
    //           />
    //         )
    //       }}
    //     />
    //     <Tab.Screen
    //       name="MyPage"
    //       component={MyPageNavigator}
    //       options={{
    //         headerShown : false
    //         ,tabBarLabel : "마이페이지"
    //         ,tabBarIcon : ({color,focused})=>(
    //           <Ionicons
    //             name="person-circle"
    //             size={24}
    //             color={color}
    //           />
    //         )
    //       }}
    //     />
    // </Tab.Navigator>
  )
}
