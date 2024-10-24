import React from "react";
import { StyleSheet,TextInputProps, Text, TextInput, TouchableOpacity, View ,Dimensions, GestureResponderEvent} from "react-native";

const {width, height} = Dimensions.get('window');

interface SignUpInputProps {
  label : string
  placeholder ?: string
  value ?: string
  editable : boolean
  button : boolean
  buttonTitle ?:string
  disabled ?:boolean
  maxLength ?:number
  buttonClick ?:(event: GestureResponderEvent) => void,
  onInput ?:(text:string)=>void,
  secure ?: boolean
  buttonDisabled ?:boolean
  alert ?: boolean
  alertText ?: string
}

export const SignUpInputComponent:React.FC<SignUpInputProps> = (props)=>{
  return (
  <>
    <View style={styles.row}>
      <Text 
        style={styles.label}
      >
        {props.label}
      </Text>
      <View style={styles.inputSection}>
      <TextInput 
        style={[props.button ? styles.buttonInput : styles.input,props.editable ? styles.inputBackColor : styles.disabledInputBackColor]}
        editable={props.editable}
        value={props.value}
        maxLength={props.maxLength}
        onChangeText={props.onInput}
        secureTextEntry={props.secure}
        placeholder={props.placeholder}
      ></TextInput>
      {props.button && (
        <TouchableOpacity 
          style={[styles.button,props.buttonDisabled ? styles.disabledButtonColor : styles.buttonColor]}
          disabled={props.disabled}
          onPress={props.buttonClick}
        >
          <Text 
            style={styles.buttonText}
          >{props.buttonTitle}</Text>
        </TouchableOpacity>
      )}
      </View>
    </View>
    {props.alert && (
      <View>
        <Text style={styles.alertText}>가나다라</Text>
      </View>
    )}
  </>
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
    color: '#3c2f2f', // 입력 텍스트 색상
    paddingHorizontal: 15,
    height : 50
  },
  buttonInput : {
    marginTop : 20,
    width : width * 0.7,
    borderRadius : 10,
    color : '#3c2f2f'
    ,paddingHorizontal : 15
    ,height : 50
  },
  inputSection : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  inputBackColor: {
    backgroundColor : '#ffffff'
  },
  disabledInputBackColor : {
    backgroundColor : 'lightgray',
  },
  button : {
    backgroundColor : '#be9b7b',
    borderRadius : 10,
    height : 50,
    marginTop : 20,
    // width : '10%',
    width : width * 0.15,
    // paddingHorizontal : 10,
    alignItems : 'center',
    justifyContent : 'center'
  },
  buttonText : {
    color : 'white'
  },
  disabledButtonColor : {

  },
  buttonColor : {

  },
  alertText : {
    color : 'red'
  }
})