import { useQuery } from "@tanstack/react-query"
import { getRequest } from "."

// const refetchInterval = 1000 * 60 * 10

// export function useGoodCate() {
//   const userInfo = useUserInfo()
//   async function fetchData() {
//     const result:any = await getRequest(API_GOOD_GETCATE,{
//       token:userInfo.token,
//     }).catch((eCode:any)=>eCode)
//     return {
//       list:result
//     }
//   }
//   return useQuery({
//     queryKey:["useGoodCate"],
//     queryFn:fetchData,
//     enabled:!!userInfo.token,
//     refetchInterval:refetchInterval
//   })
// }