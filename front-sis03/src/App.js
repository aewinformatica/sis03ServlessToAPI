import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { api } from './services/api';

function App() {


const API_URL = 'http://localhost:8080/api/produto';

const getProdutoData = async () => {
    try {
        const response = await api.get(API_URL, {
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados do produto:', error);
        throw error;
    }
};


  useEffect(()=>{
    getProdutoData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
