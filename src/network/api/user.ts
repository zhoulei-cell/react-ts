import axios from '../axios'
import { AxiosResponse } from 'axios'

interface IUserInfo {
  name: string;
  age: number;
  sex: string;
}
// export function getUserInfo():Promise<AxiosResponse<IUserInfo>> {
//   return axios.get('/api/user')
// }

export const getUserInfo: () => Promise<AxiosResponse<IUserInfo>> = () => {
  return axios.get('/api/user')
}