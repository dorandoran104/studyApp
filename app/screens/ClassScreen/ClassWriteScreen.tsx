import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { ArticleBottomButtonComponent } from "../../components/ArticleBottomButtonComponent";
import { SignUpInputComponent } from "../../components/SignUpInputComponent";
import { TextAreaComponent } from "../../components/TextAreaComponent";
import { SelectComponent } from "../../components/SelectComponent";
import { ConfirmComponent } from "../../components/ConfirmComponent";
import { useFetch } from "../../hooks/useFetch";
import { DatePickerComponent } from "../../components/DatePickerComponent";

export const ClassWriteScreen:React.FC<{navigation:any,route:any}>=({navigation,route})=>{
  const [name,setName] = useState("")
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [description,setDescription] = useState("")

  const [buttonDisabled,setButtonDisabled] = useState(true)

  const [viewModal,setViewModal] = useState(false)

  const [startDate,setStartDate] = useState(new Date())
  const [endDate,setEndDate] = useState(new Date())

  const handleValueChange = (value: string) => {
    setSelectedValue(value); // 선택한 값 저장
  };
  const saveClass = ()=>{
    setViewModal(!viewModal)
  }

  const sendApi = async ()=>{
    if(startDate > endDate){
      Alert.alert('종료일을 확인해 주세요')
      return false
    }
    const param = {
      name : name
      ,description : description
      ,maxMembers : selectedValue
      ,startDate : startDate
      ,endDate : endDate
    }
    let response =await useFetch.usePostFetch("/class/api/save",param,navigation)
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
    if(name != '' && selectedValue != '' && description != ''){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
    console.log(buttonDisabled)
  },[name,selectedValue,description])

  return(
    <SafeAreaView style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.section}>
        <View style={styles.top}>
          <SignUpInputComponent 
            label={"모임명"} 
            editable={true}          
            value={name}
            onInput={setName}
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
          <DatePickerComponent
            label={"모임 시작일"}
            value={startDate}
            onChange={setStartDate}
          />
           <DatePickerComponent
            label={"모임 종료일"}
            value={endDate}
            onChange={setEndDate}
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