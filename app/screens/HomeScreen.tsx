import React from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"

export const HomeScreen = ()=>{
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