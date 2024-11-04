import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View ,Dimensions, Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useFetch } from "../../hooks/useFetch";

import { SignUpInputComponent } from "../../components/SignUpInputComponent";
import { BottomButtonComponent } from "../../components/BottomButtonComponent";

const {width , height} = Dimensions.get('window');

export const SignUpScreen2:React.FC<{navigation:any,route:any}>=({navigation,route})=>{
  const param = route.params

  const nickNameReg = '^[가-힣a-zA-Z0-9]+$'

  const [nickname,setNickname] = useState("")
  const [mobileNumber,setMobileNumber] = useState(param.mobileNumber)
  const [id,setId] = useState("")
  const [password,setPassword] = useState("")
  const [passwordCheck,setPasswordCheck] = useState("")

  const [nicknameFlag,setNicknameFlag] = useState(false)
  const [idFlag,setIdFlag] = useState(false)
  const [passwordFlag,setPasswordFlag] = useState(false)

  const [nextButtonDisabled,setNextButtonDisabled] = useState(true)

  const [nicknameButton,setNicknameButton] = useState({
    show : true
    ,text : "중복확인"
    ,disabled : true
    ,onPress : ()=>{}
  })

  const [nicknameAlert,setNicknameAlert] = useState({
    show : false
    ,text : ""
    ,color : "red"
  })

  const [idButton,setIdButton] = useState({
    show : true
    ,text : '중복확인'
    ,disabled : true
    ,onPress : ()=>{}
  })

  const [idAlert,setIdAlert] = useState({
    show : false
    ,text : ""
    ,color : "red"
  })

  const [passwordCheckAlert,setPasswordCheckAlert] = useState({
    show : false,
    text : "",
    color : 'red'
  })

  const changeNickname = (text:string)=>{
    setNickname(text);
    setNicknameFlag(false)
    setNicknameButton(pre => ({
      ...pre
      ,onPress : ()=>existsNickname(text)
      ,disabled : text.length === 0
    }))

    if(text.length === 0){
      setNicknameAlert(pre=>({
        ...pre
        ,show : false
      }))
    }
    
  }

  const existsNickname = async (nickname:string)=>{
    if(nickname == ''){
      setNicknameAlert(pre => ({
        ...pre
        ,show : true
        ,text : '닉네임을 입력해 주세요'
        ,color : 'red'
      }))
      return false
    }
    let data = await useFetch.usePostFetch('/home/api/existsNickname',{nickname:nickname})
    if(data.result && data.promiseResult){
      console.log(data.data)
      if(data.data > 0){
        setNicknameAlert({
          show : true
          ,text : '사용중인 닉네임입니다.'
          ,color : 'red'
        })
        return false
      }
      setNicknameAlert({
        show : true
        ,text : '중복확인이 되었습니다.\n변경을 원하시면 입력후 조회를 눌러주세요.'
        ,color : 'green'
      })

      setNicknameButton(pre=>({
        ...pre
        ,disabled : true
      }))
      setNicknameFlag(true)
    }
    if(!data.result || !data.result){
      if(data.errMessage != null && data.errMessage != ''){
        Alert.alert(data.errMessage)
        return false
      }
      Alert.alert('오류가 발생했습니다.')
      return false
    }
    // if()
  }

  const changeId = (text:string)=>{
    setId(text)
    setIdFlag(false)
    setIdButton(pre => ({
      ...pre
      ,onPress : ()=>existsId(text)
      ,disabled : text.length === 0
    }))
    setIdAlert(pre =>({
      ...pre
      ,show : false
    }))
  }

  const existsId = async (id:string)=>{
    if(id === ''){
      setIdAlert({
        show : true
        ,text : '아이디를 입력해 주세요.'
        ,color : 'red'
      })
      return false
    }

    let data = await useFetch.usePostFetch("/home/api/existsId",{id:id})
    if(data.promiseResult){
        if(data.data > 0){
          setIdAlert({
            text : '사용중인 아이디 입니다.'
            ,color : 'red'
            ,show : true
          })
          return false
        }
        setIdAlert({
            text : '중복확인이 되었습니다.'
            ,color : 'green'
            ,show : true
        })
        setIdButton(pre=>({
          ...pre
          ,disabled : true
        }))
        setIdFlag(true)
    }
    if(!data.promiseResult){
      Alert.alert('오류가 발생했습니다.')
      return false;
    }
  }


  const changePassword = (text:string)=>{
    setPassword(text)
    setPasswordFlag(false)
    if(text.length == 0){
      setPasswordCheckAlert(pre=>({
        ...pre
        ,show : false
      }))
    }
    console.log(text)
    console.log(passwordCheck)
    if(passwordCheck.length > 0 && text !== passwordCheck){
      setPasswordCheckAlert({
        text : '비밀번호가 일치하지 않습니다.'
        ,color : 'red'
        ,show : true
      })
    }
    if(text.length > 0 && passwordCheck === text){
      setPasswordCheckAlert({
        text : '비밀번호가 일치합니다.'
        ,color : 'green'
        ,show : true
      })
      setPasswordFlag(true)
      return false
    }
  }

  const checkPassword = (text:string)=>{
    setPasswordCheck(text)
    if(text.length == 0){
      setPasswordCheckAlert(pre=>({
        ...pre
        ,show : false
      }))
    }
    if(text.length > 0 && password !== text){
      setPasswordCheckAlert({
        text : '비밀번호가 일치하지 않습니다.'
        ,color : 'red'
        ,show : true
      })
      setPasswordFlag(false)
      return false
    }
    if(text.length > 0 && password === text){
      setPasswordCheckAlert({
        text : '비밀번호가 일치합니다.'
        ,color : 'green'
        ,show : true
      })
      setPasswordFlag(true)
      return false
    }
  }

  const nextSept = async ()=>{
    
    const param = {
      id : id
      ,password : password
      ,nickname : nickname
      ,mobileNumber : mobileNumber
    }

    let data = await useFetch.usePostFetch("/home/api/signUp",param)
    if(data.promiseResult){
      navigation.replace('SignUpScreen3',{nickname:nickname})
    }
    if(!data.promiseResult){
      if(data.errMessage != null && data.errMessage != ''){
        Alert.alert(data.errMessage)
        return false
      }
      Alert.alert('오류가 발생했습니다.');
      return false
    }
  }


  useEffect(()=>{
    if(nicknameFlag && idFlag && passwordFlag){
      setNextButtonDisabled(false);
    }
    else {
      setNextButtonDisabled(true);
    }
  },[nicknameFlag,idFlag,passwordFlag])

  

  return (
    <SafeAreaView style={{flex : 1, marginHorizontal : 20}}>
      <ScrollView
        contentContainerStyle={{flexGrow : 1}}
      > 
        <View style={styles.section}>
          <SignUpInputComponent 
            label="닉네임"
            editable={true}

            button={nicknameButton}

            disabled={false}
            onInput={changeNickname}
            value={nickname}
            maxLength={20}
            placeholder="한글/숫자/영어 20자"
            alert={nicknameAlert}
          />
          <SignUpInputComponent 
            label="휴대폰번호"
            value={param.mobileNumber}
            editable={false}
            // button={false}
          />
           <SignUpInputComponent 
            label="아이디"
            editable={true}
            button={idButton}
            disabled={false}
            onInput={changeId}
            value={id}
            maxLength={20}
            placeholder="한글/숫자/영어 20자"
            alert={idAlert}
          />
          <SignUpInputComponent
            label="비밀번호"
            editable={true}
            secure={true}
            onInput={changePassword}
            placeholder="영문+숫자 최대 20자"
          />
          <SignUpInputComponent
            label="비밀번호 확인"
            editable={true}
            secure={true}
            onInput={checkPassword}
            placeholder="영문+숫자 20자"
            alert={passwordCheckAlert}
          />
        </View>
        <View style={styles.bottom}>
          <BottomButtonComponent
            title="다음"
            disabled={nextButtonDisabled}
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