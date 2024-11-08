import React from "react";
import { View, Text, SafeAreaView, ScrollView,TouchableOpacity,Image,StyleSheet,Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'


export const MyPageScreen:React.FC<{navigation:any}> = ({navigation})=>{
  return(
    <SafeAreaView style={{flex : 1}}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>회원정보</Text>
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')} style={styles.profileSection}>
            <View>
              <Text>로그인이 필요합니다.</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuRow}>
              <Icon name="create-outline" size={22} color="#000" />
              <Text style={styles.menuText}>개인정보 수정</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuRow}>
              <Icon name="settings-outline" size={22} color={'#000'}></Icon>
              <Text style={styles.menuText}>설정</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex : 1
    ,marginHorizontal : 20
    // ,backgroundColor : 'red'
  },
  header:{
    marginTop : 20
    // backgroundColor : 'purple'
    // ,flexDirection : 'row'
  },
  headerText : {
    fontSize : 30
    ,fontWeight : 'bold'
    ,color : 'black'
  },
  loginBox:{
    height : '40%'
    ,backgroundColor : 'white'
    ,marginVertical : 5
    ,marginHorizontal : 20
    ,textAlign : 'center'

  },
  profileSection : {
    // alignItems : 'center'
    justifyContent : 'center'
    ,alignItems : 'center'
    ,marginVertical : 30
    ,backgroundColor : 'white'
    ,height : '10%'
    ,borderRadius : 8
  },
  menu : {
    backgroundColor : 'white'
    ,marginVertical : 5
    ,height : '55%'
    ,borderRadius : 8
    ,alignItems : 'center'
  },
  menuRow : {
    flexDirection : 'row'
    ,alignContent : 'center'
    ,borderBottomColor : '#e4e4e4'
    ,borderBottomWidth : 1
    ,padding : 20
    ,width : '90%'
  },
  menuText : {
    fontSize : 16
    ,marginLeft : 15
  }
  
});