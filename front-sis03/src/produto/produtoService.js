import {API_AUTH} from '../services/api';



// const USERNAME = 'welton'; // Substitua pelo seu nome de usuário
// const PASSWORD = 'welton'; // Substitua pela sua senha

const getProdutoData = async () => {
    try {
        // const token = btoa(USERNAME + ':' + PASSWORD)
        const response = await API_AUTH.get("/produto",{
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