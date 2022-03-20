import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.mercadolibre.com'
})

api.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error.response.data)
})
