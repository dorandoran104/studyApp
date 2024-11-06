import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight } from "react-native";
import { ArticleBottomButtonComponent } from "../../components/ArticleBottomButtonComponent";

export const ClassScreen:React.FC<{navigation:any}>=({navigation})=>{
  const [classList,setClassList] = useState([])

  useFocusEffect(()=>{
    let response = useFetch.useGetFetch("/class/api/list",navigation)
  })

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.section}>

      </ScrollView>
      <ArticleBottomButtonComponent
        title="모임 만들기"
        onPress={()=> navigation.navigate('ClassWriteScreen')}
        disabled={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,

    marginHorizontal : 20,
  },

  section : {

    flexGrow : 1,
  },

  
})