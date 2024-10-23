import React from "react"
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

export const LoginScreen:React.FC<{navigation:any}> = ({navigation})=>{
  return (
    <SafeAreaView style={{flex : 1}}>
      <ScrollView contentContainerStyle={{flexGrow : 1}}>
        <View style={styles.header}>
          <Icon name="chevron-back-outline" size={25}></Icon>
        </View>
        <View style={styles.container}>
          <View style={styles.loginSection}>
            <View style={styles.row}>
              <Text style={styles.text}>아이디</Text>
              <TextInput style={styles.textInput}></TextInput>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>비밀번호</Text>
              <TextInput style={styles.textInput}></TextInput>  
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button}>
                <Text>로그인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header : {
      alignContent : 'flex-start'
      ,marginHorizontal : 20
      ,marginTop : 20
  },
  container : {
    // backgroundColor : 'red'
    flexGrow : 1
    ,justifyContent : 'center'
    ,alignItems: 'center'
    ,marginHorizontal : 20
  },
  loginSection : {
    // backgroundColor : 'white'
    width : '80%'
    ,height : '40%'
    ,borderRadius : 8
    ,justifyContent : 'center'
    ,paddingLeft : 10
  },
  row : {
    marginVertical : 15
  },
  textInput : {
    marginTop : 5,
    borderColor : 'gray',
    borderWidth : 1,
    borderRadius : 8,
    fontSize : 20
  }
  ,text : {
    fontSize : 20
  },
  button : {
    backgroundColor : '#c6b0e5',
    height : 40,
    borderRadius : 8,
  }
})