import { SERVER_URL } from '@env';

export const useFetch = {
  useGetFetch : async (url:string)=>{
    const fullUrl = `${SERVER_URL}${url}`;

    let response = await fetch(url)
    .then((res)=> res.json())

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
      res.promiseResult = true
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
  }
} 