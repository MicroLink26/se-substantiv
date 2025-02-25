import axios from 'axios'

export const apiClient = axios.create()

// apiClient.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default {
  fetchWords() {
    return apiClient.get('http://localhost:3000/api/nouns')
  },
}
