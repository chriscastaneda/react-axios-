import Axios from 'axios';

/**Make HTTP URL Gobal via export */
export const InternalAxios = Axios.create({
    baseURL: 'http://localhost:3000'
});