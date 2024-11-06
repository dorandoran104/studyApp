import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Navigator
 */
import { HomeStackNavigator } from "./HomeNavigator"
import { MyPageNavigator } from "./MyPageNavigator";
import { ScheduleNavigator } from "./ScheduleNavigator";
import { ClassNavigator } from "./ClassNavigator";

const Tab = createBottomTabNavigator()
export const TabNavigator = ()=>{
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#854442', // 활성 탭 색상
        tabBarInactiveTintColor: 'gray',  // 비활성 탭 색상
        tabBarItemStyle : {
          borderRadius : 10
        },
        unmountOnBlur : true
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigator} 
        options={{
          headerShown : false
          ,tabBarLabel : "메인"
          ,tabBarIcon : ({color,focused})=>(
              <Ionicons
                name={focused ? 'home' : 'home-outline'} // 선택 상태에 따라 아이콘 변경
                size={24}
                color={color} // 활성/비활성 색상 적용
              />
            )
          }}
        />
        <Tab.Screen
          name="Class"
          component={ClassNavigator}
          
          options={{
            headerShown : false
            ,tabBarLabel : "모임"
            ,tabBarIcon : ({color,focused})=>(
              <Ionicons
                name={focused ? 'school' : 'school-outline'}
                size={24}
                color={color}  
              />
              
            )
          }}
          />
        <Tab.Screen
          name="Schedule"
          component={ScheduleNavigator}
          options={{
            headerShown : false
            ,tabBarLabel : "일정"
            ,tabBarIcon : ({color,focused})=>(
              <Ionicons
                name={focused ? "calendar-number" : "calendar-number-outline"}
                size={24}
                color={color}  
              />
            )
          }}
          />
        <Tab.Screen
          name="MyPage"
          component={MyPageNavigator}
          options={{
            headerShown : false
            ,tabBarLabel : "마이페이지"
            ,tabBarIcon : ({color,focused})=>(
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size={24}
                color={color}
              />
            )
          }}
        />
        
    </Tab.Navigator>
  )
}
