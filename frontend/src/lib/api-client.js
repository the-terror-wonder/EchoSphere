
import axios from 'axios';


const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL ,
  withCredentials: true,
});
 export default apiClient;