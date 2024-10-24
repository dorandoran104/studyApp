import React, { useState,useRef, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Text,TextInput,TouchableOpacity,Animated,Easing, Alert, Dimensions} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useFetch } from "../../hooks/useFetch";
import { BottomButtonComponent } from "../../components/BottomButtonComponent";

const {width,height} = Dimensions.get('window')

export const SignUpScreen:React.FC<{navigation:any}> = ({navigation})=>{

  const [mobileNumber,setMobileNumber] = useState("");
  const [alert,setAlert] = useState('');
  const [selectValue,setSelectValue] = useState('');
  const [certificationNumber,setCertificationNumber] = useState('');
  
  const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/

  const shakeAnimation = useRef(new Animated.Value(0)).current; // 애니메이션 값 초기화

  const [showAlert, setShowAlert] = useState(false);
  const [showSelect,setShowSelect] = useState(false);
  const [showCertification,setShowCertification] = useState(false);
  const [showCertificationAlert,setShowCertificationAlert] = useState(false)

  const [mobileInputEditAble,setMobileInputEditAble] = useState(true);
  const [editable,setEditAble] = useState(false);
  const [isDisabled,setDisabled] = useState(false);

  

  

  const mobileNumberInput = useRef<TextInput>(null);

  /**
   * 숫자만 입력
   * @param text 
   */
  const checkMobileNumber = (text:string)=>{
    const replaceText = text.replace(/[^0-9]/g,'');
    setMobileNumber(replaceText);
  }

  /**
   * 인증번호 발송
   * @returns 
   */
  const sendCertification = async ()=>{
    setEditAble(true);

    let data = await useFetch.usePostFetch('/home/api/sendCertification',{mobileNumber : mobileNumber})
    if(data.result && data.promiseResult){
      setCertificationNumber(data.certificationNumber)
      Alert.alert(data.certificationNumber)
    }
    if(!data.result || !data.promiseResult){
      Alert.alert('오류가 발생했습니다.');
      return false
    }
  }

  const checkCertification = (text:string)=>{
    setShowCertificationAlert(false);
    // console.log(text)
    if(text.length === 6 && text === certificationNumber){
      setDisabled(true)
      setEditAble(false)
      return false
    }
    if(text.length === 6){
      setShowCertificationAlert(true);
      return false
    }
  }


  const startShakeAnimation = () => {
    shakeAnimation.setValue(0); // 애니메이션 초기화
    Animated.loop(
      Animated.timing(shakeAnimation, {
        toValue: 1,
        duration: 100, // 애니메이션 속도
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      {
        iterations: 3, // 반복 횟수 설정
      }
    ).start(() => {
      shakeAnimation.setValue(0); // 애니메이션 완료 후 초기화
      setTimeout(() => {
        setShowAlert(false);
      }, 1000); // 2초 후에 경고 메시지 사라짐
    });
  };
  
  const shakeInterpolate = shakeAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 5], // 흔들림 범위
  });


  const animatedStyle = {
    transform: [{ translateX: shakeInterpolate }],
  };

  useEffect(()=>{
    if(mobileNumber.length !== 11){
      setShowAlert(false);
      setMobileInputEditAble(true)
      return
    }
    if(!regPhone.test(mobileNumber)){
      setAlert('휴대폰번호를 확인해 주세요');
      setShowAlert(true);
      startShakeAnimation();
      return
    }
    setMobileInputEditAble(false)
    mobileNumberInput.current?.blur();
    setShowSelect(true);
    if(selectValue === null || selectValue === ''){
      setShowCertification(false)
      return
    }
    setShowCertification(true);
    
  },[mobileNumber,selectValue])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.mobileSection}>
          <View style={styles.row}>
            <Text style={styles.label}>휴대폰번호</Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput 
              style={styles.input}
              value={mobileNumber}
              onChangeText={checkMobileNumber}
              placeholder="-없이 번호만 입력해 주세요"
              maxLength={11}
              keyboardType="numeric"
              editable={mobileInputEditAble}
              ref={mobileNumberInput}
            >
            </TextInput>
          </View>
          {showAlert && (
            <Animated.View style={[styles.mobileAlert, animatedStyle]}>
              <Text style={styles.mobileAlert}>{alert}</Text>
            </Animated.View>
          )}
    
        {showSelect && (
            <>
              <View style={styles.row}>
                <Text style={styles.label}>통신사</Text>
              </View>
              <View style={styles.inputRow}>
                <Picker 
                  style={styles.pickerSection}
                  selectedValue={selectValue}
                  onValueChange={setSelectValue}
                  >
                  <Picker.Item value="" label="통신사 선택"></Picker.Item>
                  <Picker.Item value="SKT" label="SKT"></Picker.Item>
                  <Picker.Item value="KT" label="KT"></Picker.Item>
                  <Picker.Item value="LG" label="LG"></Picker.Item>
                  <Picker.Item value="알뜰폰" label="알뜰폰"></Picker.Item>
                </Picker>
              </View>
            </>
          )}
          {showCertification && (
            <>
              <View style={styles.row}>
                <View style={styles.inputRow}>
                  <TextInput
                    style={editable ? styles.input80 : styles.readOnlyInput}
                    placeholder={editable ? "인증번호" : "발송버튼을 눌러주세요"}
                    editable={editable}
                    keyboardType="numeric"
                    onChangeText={checkCertification}
                    maxLength={6}
                  >
                  </TextInput>
                  <TouchableOpacity style={styles.button} onPress={sendCertification}>
                    <Text style={styles.buttonText}>발송</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {showCertificationAlert &&(
                <View style={styles.row}>
                <Text style={styles.mobileAlert}>인증번호를 확인해주세요</Text>
              </View>
              )}
              
            </>
          )}
        </View>
        <View style={styles.bottom}>
          <BottomButtonComponent
            title="다음"
            disabled={!isDisabled}
            onPress={()=>{navigation.navigate("SignUpScreen2",{mobileNumber:mobileNumber})}}
          />
          {/* <TouchableOpacity  
            style={isDisabled ? styles.bottomButton : styles.bottomButtonDisabled}
            activeOpacity={!isDisabled ? 1 : 0.2}
            disabled={!isDisabled}
            onPress={()=>navigation.navigate('SignUpScreen2',{mobileNumber:mobileNumber})}
          >
            <Text style={styles.bottomButtonText}>다음</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container : {
    flex : 1
    ,marginVertical : 20
    ,marginHorizontal : 20
  },
  section : {
    // marginTop : 20,
    flexGrow : 1,
  },
  mobileSection : {
    height : height * 0.8
    // ,backgroundColor : 'red'
  },
  row : {
    marginTop : 20,
    flexDirection  :'row',   
  },
  inputRow : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  readOnlyInput : {
    height: 50,
    // borderColor: '#be9b7b', // 입력창 테두리 색상
    // borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    width : '80%',
    backgroundColor: 'lightgray', // 입력창 배경색
    color: '#3c2f2f', // 입력 텍스트 색상
  },
  input : {
    height: 50,
    // borderColor: '#be9b7b', // 입력창 테두리 색상
    // borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    width : '100%',
    backgroundColor: '#ffffff', // 입력창 배경색
    color: '#3c2f2f', // 입력 텍스트 색상
  },
  input80 : {
    height: 50,
    borderColor: '#be9b7b', // 입력창 테두리 색상
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    width : '80%',
    backgroundColor: '#ffffff', // 입력창 배경색
    color: '#3c2f2f', // 입력 텍스트 색상
  },
  button : {
    height : 50,
    width : 50,
    borderRadius : 10,
    marginLeft : 20,
    backgroundColor : '#be9b7b',
    justifyContent : 'center',
    alignItems : 'center'
  },
  buttonText : {
    color : 'white',
    textAlign : 'center',
    textAlignVertical : 'center'
  },
  label : {
    marginVertical : 20
   ,fontSize : 16
  },
  mobileAlert : {
    marginTop : 10,
    color : 'red'
  },
  pickerSection : {
    width : '100%',
  },
  bottom:{
    height : height * 0.1,
    padding : 10
  },
})