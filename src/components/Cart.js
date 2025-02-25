import React from 'react';
import { useGetProductsQuery } from '../redux/api';

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar os produtos</div>;

  return (
    <div>
      <h2>Produtos</h2>
      {data.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
