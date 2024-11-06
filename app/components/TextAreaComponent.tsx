import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface TextAreaProps {
  label : string,
  value : string,
  onInput  : (value: string) => void;
}

export const TextAreaComponent = (props:TextAreaProps)=>{
  return(
    <View style={styles.row}>
      <Text style={styles.label}>
        {props.label}
      </Text>
      <View style={styles.inputSection}>
        <TextInput 
          style={styles.textarea}
          multiline={true}
          value={props.value}
          onChangeText={props.onInput}
        ></TextInput>
      </View>
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
  inputSection : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  textarea : {
    marginTop : 20,
    width : '100%',
    backgroundColor : '#ffffff',
    borderRadius : 10,
    color: '#3c2f2f', // 입력 텍스트 색상
    paddingHorizontal: 15,
    height : 180,
  }
})