import React, {useState, useEffect} from "react"
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Alert } from "react-native"
import { useFetch } from "../../hooks/useFetch"
import Icon from 'react-native-vector-icons/Ionicons'

export const LoginScreen:React.FC<{navigation:any}> = ({navigation})=>{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const fetch = useFetch;

  const handleLogin = async ()=>{
    if(email == null || email == ''){
      Alert.alert('이메일을 입력해 주세요');
      return false;
    }

    if(password == null || password == ''){
      Alert.alert('비밀번호를 입력해 주세요');
      return false;
    }
    const param = {
      email : email
      ,password : password
    }
    let data = await useFetch.usePostFetch('/home/api/login',param);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.loginSection}>
          {/* <Text style={styles.title}>환영합니다!</Text> */}
          
          {/* 이메일 입력 필드 및 레이블 */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>이메일</Text>
            <TextInput
              placeholder="이메일 입력"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#fff4e6" // Placeholder 텍스트 색상
            />
          </View>

          {/* 비밀번호 입력 필드 및 레이블 */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>비밀번호</Text>
            <TextInput
              placeholder="비밀번호 입력"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#fff4e6" // Placeholder 텍스트 색상
            />
          </View>
          
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.link}>
            <Text style={styles.linkText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <SafeAreaView style={{flex : 1}}>
    //   <ScrollView contentContainerStyle={{flexGrow : 1}}>
    //     <View style={styles.header}>
    //       <Icon name="chevron-back-outline" size={25}></Icon>
    //     </View>
    //     <View style={styles.container}>
    //       <View style={styles.loginSection}>
    //         <View style={styles.row}>
    //           <Text style={styles.text}>아이디</Text>
    //           <TextInput style={styles.textInput}></TextInput>
    //         </View>
    //         <View style={styles.row}>
    //           <Text style={styles.text}>비밀번호</Text>
    //           <TextInput style={styles.textInput}></TextInput>  
    //         </View>
    //         <View style={styles.row}>
    //           <TouchableOpacity style={styles.button}>
    //             <Text style={styles.buttonText}>로그인</Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#4b3832', // 배경색
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginSection: {
    // backgroundColor: '#854442', // 로그인 섹션 배경색
    width: '100%',
    padding: 30,
    borderRadius: 15,
    shadowColor: '#3c2f2f', // 그림자 색상
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // Android 그림자 효과
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff4e6', // 제목 색상
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%', // 입력 필드 너비 설정
    marginVertical: 10,
  },
  label: {
    color: 'black', // 레이블 텍스트 색상
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: '#be9b7b', // 입력창 테두리 색상
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff4e6', // 입력창 배경색
    color: '#3c2f2f', // 입력 텍스트 색상
  },
  button: {
    backgroundColor: '#be9b7b', // 버튼 배경색
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%', // 버튼 너비 설정
    marginTop: 10,
  },
  buttonText: {
    color: '#fff4e6', // 버튼 텍스트 색상
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: 'black', // 링크 텍스트 색상
    fontSize: 16,
  },
})