import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { ArticleBottomButtonComponent } from "../../components/ArticleBottomButtonComponent";
import { SignUpInputComponent } from "../../components/SignUpInputComponent";
import { TextAreaComponent } from "../../components/TextAreaComponent";
import { SelectComponent } from "../../components/SelectComponent";
import { ConfirmComponent } from "../../components/ConfirmComponent";
import { useFetch } from "../../hooks/useFetch";

export const ClassWriteScreen:React.FC<{navigation:any,route:any}>=({navigation,route})=>{
  const [title,setTitle] = useState("")
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [description,setDescription] = useState("")

  const [buttonDisabled,setButtonDisabled] = useState(true)

  const [viewModal,setViewModal] = useState(false)

  const handleValueChange = (value: string) => {
    setSelectedValue(value); // 선택한 값 저장
  };
  const saveClass = ()=>{
    setViewModal(!viewModal)
  }

  const sendApi = async ()=>{
    console.log('sss')
    const param = {
      title : title
      ,description : description
      ,maxMembers : selectedValue
    }
    let response =await useFetch.usePostFetch("/class/api/write",param)
    if(response.promiseResult){
      Alert.alert('저장되었습니다.')
      navigation.replace("ClassScreen")
    }
    if(!response.promiseResult){
      if(response.errMessage != null && response.errMessage != ''){
        Alert.alert(response.errMessage)
        return false
      }
      Alert.alert('오류가 발생했습니다.')
      return false
    }
  }

  useEffect(()=>{
    if(title != '' && selectedValue != '' && description != ''){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
    console.log(buttonDisabled)
  },[title,selectedValue,description])

  return(
    <SafeAreaView style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.section}>
        <View style={styles.top}>
          <SignUpInputComponent 
            label={"모임명"} 
            editable={true}          
            value={title}
            onInput={setTitle}
          />
          <TextAreaComponent
            label={"모임 설명"}
            value={description}
            onInput={setDescription}
          />
          <SelectComponent 
            label={"최대 인원"}
            options={Array.from({ length: 10 }, (_, i) => (i + 1).toString())} 
            selectedValue={selectedValue} 
            onValueChange={handleValueChange}          
          />
          <ConfirmComponent 
          viewModal={viewModal}
          setViewModal={setViewModal}
          callback={sendApi}
          text="저장하시겠습니까?"
          ></ConfirmComponent>
        </View>
      </ScrollView>
      <ArticleBottomButtonComponent
          title="저장"
          onPress={saveClass}
          disabled={buttonDisabled}
        /> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    // backgroundColor : 'red',
    marginHorizontal : 20
  },
  section : {
    flexGrow : 1,
    // backgroundColor : 'blue'
    
  },
  top : {

  }
})