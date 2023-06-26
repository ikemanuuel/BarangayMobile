import axios from 'axios';

axios.defaults.baseURL = 'https://darkrayleh.pythonanywhere.com/api/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;