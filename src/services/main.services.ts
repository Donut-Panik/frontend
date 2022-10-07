import axios from 'api/http-common'

const post = async <T>(data: T, endpoint: string) => {
  return await axios.post<T>(`v1/${endpoint}/`, data)
}

const HttpService = {
  post,
}

export default HttpService
