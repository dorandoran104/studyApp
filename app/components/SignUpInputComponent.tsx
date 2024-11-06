import React from "react";
import { StyleSheet,TextInputProps, Text, TextInput, TouchableOpacity, View ,Dimensions, GestureResponderEvent} from "react-native";

const {width, height} = Dimensions.get('window');

interface SignUpInputProps {
  label : string
  placeholder ?: string
  value ?: string
  editable : boolean
  button ?: ButtonProps
  disabled ?:boolean
  maxLength ?:number
  onInput ?:(text:string)=>void,
  secure ?: boolean
  alert ?: AlertProps
}

interface ButtonProps{
  show : boolean
  ,text : string
  ,onPress : (event:GestureResponderEvent) => void
  ,disabled : boolean

}

interface AlertProps{
  show : boolean
  ,text ?:string
  ,color ?:string
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
      {props.button && props.button.show && (
        <TouchableOpacity 
          style={[styles.button,props.button.disabled ? styles.disabledButtonColor : styles.buttonColor]}
          disabled={props.button.disabled}
          onPress={props.button.onPress}
        >
          <Text 
            style={[styles.buttonText]}
          >{props.button.text}</Text>
        </TouchableOpacity>
      )}
      </View>
    </View>
    {props.alert != null && props.alert.show && (
      <View>
        <Text style={{color : props.alert.color == null ? "red" : props.alert.color}}>{props.alert.text}</Text>
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
    backgroundColor : 'lightgray'
  },
  buttonColor : {
    backgroundColor : '#be9b7b',
  },
  alertText : {
    
  }
})