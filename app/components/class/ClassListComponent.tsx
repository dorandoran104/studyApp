import React from "react";
import { ClassInterface } from "../../interface/ClassInterface";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { DateUtil } from "../../util/DateUtil";
import { GestureEvent } from "react-native-gesture-handler";

interface ClassProps extends ClassInterface{
  onPress : () => void
}

export const ClassListComponent=(props:ClassProps)=>{

  return(
    <TouchableOpacity style={styles.row} onPress={props.onPress}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.name}</Text>
          {/* <Text>{props.currentMembers.toString()}/{props.maxMembers.toString()}</Text> */}
        </View>
        <View style={styles.container}>
          <Text style={styles.contentText}>현재 인원 : {props.currentMembers.toString()} / 최대 인원 : {props.maxMembers.toString()}</Text>
          <Text style={styles.contentText}>시작일 : {props.startDate.toString()}</Text>
          <Text style={styles.contentText}>종료일 : {props.endDate.toString()}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row : {
    backgroundColor : '#ffffff',
    borderRadius : 10,
    padding : 10,
    borderWidth : 1,
    borderColor : '#dfe1e2',
   
  },
  header : {
    width : '100%',
    borderBottomWidth : 1,
    borderBottomColor : '#dfe1e2',
    marginVertical : 10

    // backgroundColor : 'red'
  },
  title : {
    marginBottom : 10,
    fontSize : 20
  },
  container : {
    
  },
  contentText : {
    marginVertical : 5,
    fontSize : 16,
  }
})