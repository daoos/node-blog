import axios from 'axios'

var blogApi = {}

var instance = axios.create({
  baseURL: '/api',
  transformResponse: [function (data) {
    return data
  }],
  withCredentials: true,
  responseType: 'json',
  validateStatus: function (status) {
    return status >= 200 && status < 300
  }
})

// 用户注册
blogApi.register = function (params) {
  return instance.post('/login/createAccount', params)
}

export default blogApi
