import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableHighlight, View , Dimensions} from "react-native";
import { BottomButtonComponent } from "../../components/BottomButtonComponent";

const {width,height} = Dimensions.get('window')

export const SignUpScreen3:React.FC<{navigation:any,route:any}>=({navigation,route})=>{
  const param = route.params
  return(
    <>
      <SafeAreaView style={{flex : 1, marginHorizontal : 20}}>
          <View style={styles.section}>
            <Text style={styles.text}>
              {param.nickname}님 환영합니다
            </Text>
            <Text style={styles.text}>
              회원가입이 완료되었습니다
            </Text>
          </View>
          <View style={styles.bottom}>
            <BottomButtonComponent
              disabled={false}
              onPress={()=>navigation.navigate('LoginScreen')}
              title="로그인 하러 가기"
            />
          </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flexGrow : 1,
    // backgroundColor  :'blue',
    
  },
  section : {
    // backgroundColor : 'red',
    height : height * 0.8,
    justifyContent : 'center'
    ,alignItems : 'center'
  },
  bottom : {
    height : height * 0.1,
    padding : 10,
    // backgroundColor : 'blue'
  },
  text : {
    fontSize : 23,
    marginTop : 10,
    fontWeight : "bold"
  }
})