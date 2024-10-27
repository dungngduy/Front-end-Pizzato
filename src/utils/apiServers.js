import Axios from 'axios';

const AxiosInstance = Axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: { 'Content-Type': 'application/json' },
    validateStatus: function (status) {
        return status >= 200 && status < 500;
    },
});

export default AxiosInstance;