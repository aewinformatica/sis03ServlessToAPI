import axios from "axios";


// ----------------------------------------------------------------------------------------
export const API_AUTH = axios.create({
    timeout: 2000,
    baseURL:`${process.env.REACT_APP_URL_MS_AUTH}`
});

API_AUTH.interceptors.request.use(config => {
    
     config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
     config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
     config.headers['Authorization'] ='Basic ' + btoa(`${process.env.REACT_APP_USERNAME}` + ':' + `${process.env.REACT_APP_PASSWORD}`);

    return config;
}, error => {
    return Promise.reject(error);
});

// --------------------------------------------------------------------------------------

export const API_PRODUTOS = axios.create({
    timeout: 2000,
    baseURL:`${process.env.REACT_APP_URL_MS_PRODUTOS}`
});


API_PRODUTOS.interceptors.request.use(config => {
    
     config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
     config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
     config.headers['Authorization'] ='Basic ' + btoa(`${process.env.REACT_APP_USERNAME}` + ':' + `${process.env.REACT_APP_PASSWORD}`);

    return config;
}, error => {
    return Promise.reject(error);
});