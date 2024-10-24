import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface SignUpInputProps {
  label : string
  value ?: string
  editable : boolean
}

export const SignUpInputComponent:React.FC<SignUpInputProps> = (props)=>{
  return (
    <View style={styles.row}>
      <Text 
        style={styles.label}
      >
        {props.label}
      </Text>
      <TextInput 
        style={[styles.input,props.editable ? styles.inputBackColor : styles.disabledInputBackColor]}
        editable={props.editable}
        value={props.value}
      >
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  row : {
    marginVertical : 20
  },
  label : {
    fontSize : 16
  },
  input : {
    marginTop : 20,
    width : '100%',
    borderRadius : 10,
    // backgroundColor: '#ffffff', // 입력창 배경색
    color: '#3c2f2f', // 입력 텍스트 색상
    paddingHorizontal: 15,
    height : 50
  },
  inputBackColor: {
    backgroundColor : '#ffffff'
  },
  disabledInputBackColor : {
    backgroundColor : 'lightgray'
  }
})