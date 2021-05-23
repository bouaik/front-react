const DEV_URL = 'http://localhost:3001/api/v1/';
const PROD_URL = '';
const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;

export default API_ROOT;