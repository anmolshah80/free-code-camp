import { AiOutlineLoading } from 'react-icons/ai';

import useFetch from 'hooks/useFetch';

import './styles.css';

const RenderProductTitles = ({ data }) => {
  if (!data) return null;

  const { products } = data;

  if (products?.length === 0) return null;

  return products.map((product) => (
    <p key={product.id} className="product-title">
      {product.title}
    </p>
  ));
};

const RenderProducts = () => {
  const url = 'https://dummyjson.com/products';

  const { data, loading, errorMessage } = useFetch(url, {});

  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  return (
    <div className="products-container">
      <h1>useFetch Hook</h1>
      <RenderProductTitles data={data} />
    </div>
  );
};

export default RenderProducts;
