import React from "react";
import { TouchableOpacity, Text, StyleSheet,GestureResponderEvent } from "react-native";

interface buttonProps {
  title : string
  ,disabled : boolean
  ,onPress : (event:GestureResponderEvent)=>void
}

export const BottomButtonComponent:React.FC<buttonProps> = (props)=>{
  return (
    <>
      <TouchableOpacity
        style={[styles.bottomButton,props.disabled ? styles.bottomButtonDisabledColor : styles.bottomButtonColor]}
        disabled={props.disabled}
        onPress={props.onPress}
      >
        <Text style={styles.bottomButtonText}>{props.title}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  bottomButton : {
    // backgroundColor : '#be9b7b',
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10,
    padding : 10
    // margin : 10
  },
  bottomButtonColor : {
    backgroundColor : '#be9b7b',
  },
  bottomButtonDisabledColor : {
    backgroundColor : 'lightgray',
  },
  bottomButtonText : {
    fontSize : 20,
    color : 'white'
  }
})
