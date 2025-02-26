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
    //https://site--deliveroo-backend--fg6zdpvl2w9z.code.run/api/nouns
    return apiClient.get('https://site--deliveroo-backend--fg6zdpvl2w9z.code.run/api/nouns')
  },
}
