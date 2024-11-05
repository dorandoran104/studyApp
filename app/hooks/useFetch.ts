import { SERVER_URL } from '@env';
import * as SecureStore from 'expo-secure-store';

export const useFetch = {
  useGetFetch : async (url:string,navigation:any)=>{
    const accessToken = await SecureStore.getItemAsync('accessToken');
    const fullUrl = `${SERVER_URL}${url}`;
    let response = await fetch(fullUrl,{
      method : 'get'
      ,headers : {
        'Authorization' : `Bearer ${accessToken}`
      }
    })
    .then(async(res)=>{
      if(res.status === 401){
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        })
        return {result : false,promiseResult : false}
      }
      const data = await res.json();
      const newAccessToken = data.headers.get('New-Access-Token');
      if(newAccessToken){
        await SecureStore.setItemAsync('accessToken', newAccessToken);
      }
      data.promiseResult = data.result ? true : false;
      return data;
    })
    .catch((err)=>{
      console.log(err)
      return {result : false,promiseResult : false}
    })
    // // console.log(response)
    return response;
  },

  usePostFetch : async (url:string,param:object)=>{
    const fullUrl = `${SERVER_URL}${url}`
    // console.log(SERVER_URL)
    let response = await fetch(fullUrl,{
      method : 'post'
      ,body : JSON.stringify(param)
      ,headers : {
        'Content-type' : 'application/json'
      }
    })
    .then((res)=> res.json())
    .then((res)=>{
      if(res.result){
        res.promiseResult = true
      }else{
        res.promiseResult = false
      }
      return res
    })
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