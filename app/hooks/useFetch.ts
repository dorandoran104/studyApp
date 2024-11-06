import { SERVER_URL } from '@env';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export const useFetch = {
  useGetFetch : async (url:string,navigation:any)=>{
    const accessToken = await SecureStore.getItemAsync('accessToken');
    const fullUrl = `${SERVER_URL}${url}`;
    let response = await fetch(fullUrl,{
      headers : {
        'Authorization' : `Bearer ${accessToken}`
      }
    })
    .then(async(res)=>{
      if(res.status === 401){
        Alert.alert('로그인이 필요합니다.')
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        })
        return {result : false,promiseResult : false}
      }

      try{
        const newAccessToken = res.headers.get('access_token')
        if(newAccessToken){
          await SecureStore.setItem('accessToken',newAccessToken)
        }
      }catch(error){

      }
      const data = await res.json();
      data.promiseResult = data.result ? true : false;
      return data;
    })
    .catch((err)=>{
      console.log(err)
      return {result : false,promiseResult : false}
    })
    console.log(response)
    return response;
  },

  usePostFetch : async (url:string,param:object,navigation:any)=>{
    const fullUrl = `${SERVER_URL}${url}`
    const accessToken = await SecureStore.getItemAsync('accessToken');
    let response = await fetch(fullUrl,{
      method : 'post'
      ,body : JSON.stringify(param)
      ,headers : {
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${accessToken}`
      }
    })
    .then(async (res)=>{
      if(res.status === 401){
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        })
        return {result : false,promiseResult : false}
      }
      try{
        const newAccessToken = res.headers.get('access_token')
        if(newAccessToken){
          await SecureStore.setItem('accessToken',newAccessToken)
        }
      }catch(error){

      }
      const data = await res.json();
      data.promiseResult = data.result ? true : false;
      return data;
    })
    // .then((res)=> res.json())
    // .then((res)=>{
    //   if(res.result){
    //     res.promiseResult = true
    //   }else{
    //     res.promiseResult = false
    //   }
    //   return res
    // })
    .catch((err)=>{
      console.log(err)
      return {
        result : false
        ,promiseResult : false
      }

    })
    console.log(response)
    return response;
  },
} 