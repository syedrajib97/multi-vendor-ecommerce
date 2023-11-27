import axios from 'axios';

const LOCAL = 'http://localhost:5000';
const PRODUCTION = 'http://localhost:6000';

let api_url = '';

// Consider using environment variables or a configuration file for more flexibility
const mode = process.env.REACT_APP_MODE || 'local';

if (mode === 'pro') {
    api_url = PRODUCTION;
} else {
    api_url = LOCAL;
}

// Add a default case for unexpected values of mode
if (!api_url) {
    console.error(`Unexpected value for mode: ${mode}`);
    // Set a default URL or throw an error based on your application's needs
}

const api = axios.create({
    baseURL: `${api_url}/api`,
    withCredentials: true
});

// Error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle error
        console.error('Axios request error:', error);
        return Promise.reject(error);
    }
);

export default api;




// import axios from 'axios'
// const local = 'http://localhost:5000'
// const production = 'http://localhost:6000'
// let api_url = ''
// let mode = 'pro'

// if (mode === 'pro'){
//     api_url = production
// }else{
//     api_url = local

// }
// const api = axios.create({
//     baseURL: `${api_url}/api`,
//     withCredentials : true
// })
// export default api