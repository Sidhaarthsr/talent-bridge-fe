import axios from 'axios';
import { BASE_URL, HEADERS } from '../constants';

class ApiUtils {
    constructor() {
        this.client = axios.create({ baseURL: BASE_URL });
    }

    async request(method, url, data = {}, params = {},) {
        console.log(url);
        const response = await this.client.request({
          method,
          url,
          headers: HEADERS,
          params: params || {},
          data: data || {},
        });
        return response.data;
      }

}

export default ApiUtils;