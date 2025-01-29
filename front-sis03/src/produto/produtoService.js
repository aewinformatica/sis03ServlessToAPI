import {api} from '../services/api';

const API_URL = 'http://localhost:8080/api/produto';

// const USERNAME = 'welton'; // Substitua pelo seu nome de usuário
// const PASSWORD = 'welton'; // Substitua pela sua senha

const getProdutoData = async () => {
    try {
        // const token = btoa(USERNAME + ':' + PASSWORD)
        const response = await api.get(API_URL,{
            // headers:{
            //     'Access-Control-Allow-Origin':'http://localhost:3000',
            //     'Authorization':`Basic ${token}`, 
            // },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados do produto:', error);
        throw error;
    }
};

export default getProdutoData;