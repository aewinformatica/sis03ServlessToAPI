import React, { useEffect, useState } from 'react';
import getProdutoData from './produtoService.js';

const ProdutoComponent = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const data = await getProdutoData();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            {produtos.length ? (
                <ul>
                    {produtos.map((product) => (
                        <li key={product.id}>{product.descricao}</li>
                    ))}
                </ul>
            ) : (
                <p>Carregando produtos...</p>
            )}
        </div>
    );
};

export default ProdutoComponent;