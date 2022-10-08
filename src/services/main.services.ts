import axios from 'api/http-common'

const post = async <T>(data: T, endpoint: string) => {
  return await axios.post<T>(`v1/${endpoint}/`, data)
}

const get = async (endpoint: string) => {
  return await axios.get(`v1/${endpoint}/`)
}

const HttpService = {
  get,
  post,
}

export default HttpService
