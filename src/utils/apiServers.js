import Axios from 'axios';

const baseUrl = 'http://localhost:8000/api';
const axios = Axios.create(
    baseUrl
);

export default axios;