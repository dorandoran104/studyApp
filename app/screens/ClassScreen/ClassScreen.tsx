import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight } from "react-native";
import { ArticleBottomButtonComponent } from "../../components/ArticleBottomButtonComponent";
import { Alert } from "react-native";
import { ClassListComponent } from "../../components/class/ClassListComponent";
import { ClassInterface } from "../../interface/ClassInterface";

export const ClassScreen:React.FC<{navigation:any}>=({navigation})=>{
  const [classList,setClassList] = useState([])

  useFocusEffect(
    useCallback(()=>{
      const returnData = async ()=>{
        let response = await useFetch.useGetFetch("/class/api/list",navigation)
        if(response.promiseResult){
          setClassList(response.data)
        }else{
          Alert.alert(response.errMessage != null && response.errMessage != '' ? response.errMessage : "오류가 발생했습니다.")
        }
      }
      returnData()
    },[])
  )

  const detail = (data:ClassInterface)=>{
    navigation.navigate("ClassDetail",{param : data})
  }

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.section}>
        {classList.map((data:ClassInterface)=>(
          <ClassListComponent
            key={data.code}
            name={data.name} 
            code={data.code} 
            currentMembers={data.currentMembers} 
            maxMembers={data.maxMembers} 
            startDate={data.startDate} 
            endDate={data.endDate}        
            onPress={()=>detail(data)}
          />
        ))}
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