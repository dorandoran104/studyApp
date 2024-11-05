import React, {useEffect } from "react"
import { SafeAreaView, ScrollView, Text, View, } from "react-native"
import { useFetch } from "../../hooks/useFetch"
import { useFocusEffect } from "@react-navigation/native"

export const HomeScreen:React.FC<{navigation:any}> = ({navigation})=>{

  useFocusEffect(()=>{
    const response = useFetch.useGetFetch("/home/api/main",navigation)
   
  })
  
  return(
    <SafeAreaView style={{flex : 1}}>
      <ScrollView>
        <View>
          <Text>메인 화면 입니다.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}