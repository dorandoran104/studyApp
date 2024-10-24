import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View ,Dimensions} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useFetch } from "../../hooks/useFetch";

import { SignUpInputComponent } from "../../components/SignUpInputComponent";
import { BottomButtonComponent } from "../../components/BottomButtonComponent";

const {width , height} = Dimensions.get('window');

export const SignUpScreen2:React.FC<{navigation:any,route:any}>=({navigation,route})=>{
  const param = route.params

  const [nickname,setNickname] = useState("")
  const [mobileNumber,setMobileNumber] = useState(param.mobileNumber)
  const [id,setId] = useState("")
  const [password,setPassword] = useState("")
  const [passwordCheck,setPasswordCheck] = useState("")

  useEffect(()=>{
    
  },[nickname,id,password,passwordCheck])

  const existsNickname = ()=>{
    
    // if()
  }

  const existsId = ()=>{

  }

  const nextSept = ()=>{

  }

  const checkPassword = ()=>{


  }

  return (
    <SafeAreaView style={{flex : 1, marginHorizontal : 20}}>
      <ScrollView
        contentContainerStyle={{flexGrow : 1}}
      > 
        <View style={styles.section}>
          <SignUpInputComponent 
            label="닉네임"
            editable={true}
            button={true}
            buttonTitle="중복확인"
            buttonDisabled={false}
            disabled={false}
            buttonClick={existsNickname}
            onInput={setNickname}
            value={nickname}
            maxLength={20}
            placeholder="한글/숫자/영어 20자"
          />
          <SignUpInputComponent 
            label="휴대폰번호"
            value={param.mobileNumber}
            editable={false}
            button={false}
          />
           <SignUpInputComponent 
            label="아이디"
            editable={true}
            button={true}
            buttonTitle="중복확인"
            disabled={false}
            buttonClick={existsId}
            onInput={setNickname}
            value={nickname}
            maxLength={20}
            placeholder="한글/숫자/영어 20자"
          />
          <SignUpInputComponent
            label="비밀번호"
            editable={true}
            button={false}
            secure={true}
            onInput={setPassword}
            placeholder="영문+숫자 최대 20자"
          />
          <SignUpInputComponent
            label="비밀번호 확인"
            editable={true}
            button={false}
            secure={true}
            onInput={checkPassword}
            placeholder="영문+숫자 최대 20자"
          />
        </View>
        <View style={styles.bottom}>
          <BottomButtonComponent
            title="다음"
            disabled={true}
            onPress={nextSept}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  section : {
    // backgroundColor : 'red',
    height : height * 0.8
  },
  bottom : {
    height : height * 0.1,
    padding : 10,
    // backgroundColor : 'blue'
  }
})