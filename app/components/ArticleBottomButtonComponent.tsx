import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, Text, Animated, Dimensions, GestureResponderEvent } from "react-native";

const {height} = Dimensions.get('window')

interface ButtonProps{
  title : string
  onPress : (event:GestureResponderEvent)=> void
  disabled : boolean
}

export const ArticleBottomButtonComponent = (props:ButtonProps) => {
  return (
    <TouchableOpacity 
      style={[styles.button,props.disabled ? styles.disabledColor : styles.buttonColor]} 
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
    
  )
};

const styles = StyleSheet.create({
  button : {
    position : 'absolute',
    bottom : 5,
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    height : height * 0.08,
    borderRadius : 15,
    // backgroundColor : '#854442'
  },
  buttonColor : {
    backgroundColor : '#854442'
  },
  disabledColor : {
    backgroundColor : 'lightgray'
  },
  buttonText : {
    fontSize : 25,
    fontWeight : 'bold',
    color : 'white'
  }
});

