import React from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { SignUpInputComponent } from "../../components/SignUpInputComponent";

export const SignUpScreen2:React.FC<{navigation:any,route:any}>=({navigation,route})=>{
  const param = route.params

  return (
    <SafeAreaView style={{flex : 1, marginHorizontal : 20}}>
      <ScrollView
        contentContainerStyle={{flexGrow : 1}}
      > 
        <SignUpInputComponent 
          label="닉네임"
          editable={true}
        />
        <SignUpInputComponent 
          label="휴대폰번호"
          value={param.mobileNumber}
          editable={false}
        />
      </ScrollView>
    </SafeAreaView>
    
  )
}