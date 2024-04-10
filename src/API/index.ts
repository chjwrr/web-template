import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({})
instance.defaults.timeout = 30000;
instance.defaults.baseURL = 'http://d.eheadlink.com'
instance.defaults.xsrfCookieName = '';
instance.defaults.xsrfHeaderName = ''

export async function getRequest(url:string,params:any) {
  const keys = Object.keys(params)
  let urlParams = '?'
  keys.map((it:string)=>{
    urlParams = urlParams+it+'='+params[it]+'&'
  })
  return new Promise((resolut,reject)=>{
    instance.get(url + urlParams.slice(0,-1)).then((result:any)=>{
      console.log('get result=',url,result)
      if (result.status == 200){
        if (result.data && result.data.code == 1){
          resolut(result.data.data)
        }else {
          toast.error(result.data.msg)
          // reject(result.data.code)
        }
      }else {
        // reject(result.status)
        toast.error(result.status)
      }
    }).catch((e:any)=>{
      console.log('get e===',e);
      // reject(e)
    })
  })
}
export async function postRequest(url:string,params:any,config?:any) {
  return new Promise((resolut,reject)=>{
    instance.post(url,params,config).then((result:any)=>{
      console.log('post result=',url,result)
      if (result.status == 200){
        if (result.data && result.data.code == 1){
          resolut(result.data.data)
        }else {
          toast.error(result.data.msg)
          reject(result.data.code)
        }
      }else {
        reject(result.status)
        toast.error(result.status)
      }
    }).catch((e:any)=>{
      console.log('post e===',e);
      reject(e)
    })
  })
}

export const uploadImage = (token:string,imgFile:any) => {
  const formData = new FormData();
  formData.append('file', imgFile);
  formData.append('token',token)
  return instance.post('API_APPLY_UPLOAD_DESIGN',formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
};
