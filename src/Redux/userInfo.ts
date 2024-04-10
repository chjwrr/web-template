import { RootState } from './index';
import { useSelector } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState:any = {
  userInfo:{}
}

export function useUserInfo(): any {
  return useSelector((state: RootState) => state.userInfo.userInfo)
}
const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    saveUserInfo:(state,action:PayloadAction<any>)=>{
      state.userInfo = action.payload
    },
  }
})

export const { saveUserInfo } = userInfoSlice.actions
export default userInfoSlice.reducer

