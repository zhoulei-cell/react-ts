import axios,{ AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  timeout: 5000
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (err: any) => {
  return Promise.reject(err)
})

instance.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (err: any) => {
  return Promise.reject(err)
})

export default instance