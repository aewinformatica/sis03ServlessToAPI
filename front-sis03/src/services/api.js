import axios from "axios";

export const api = axios.create({
    timeout: 2000,
});

const USERNAME = 'welton'; // Substitua pelo seu nome de usuário
const PASSWORD = 'welton'; // Substitua pela sua senha

api.interceptors.request.use(config => {
    
     config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
     config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
     config.headers['Authorization'] ='Basic ' + btoa(USERNAME + ':' + PASSWORD);

    return config;
}, error => {
    return Promise.reject(error);
});