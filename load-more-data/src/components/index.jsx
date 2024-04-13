import { useState, useEffect } from 'react';

import { AiOutlineLoading } from 'react-icons/ai';
import RenderProducts from './RenderProducts';

import './styles.css';

const LoadMoreData = ({ productsLimit = 10 }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isProductsLimitReached, setProductsLimitReached] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);

    const productsToSkip = count === 0 ? count : count * productsLimit;

    const apiUrl = `https://dummyjson.com/products?limit=${productsLimit}&skip=${productsToSkip}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.products.length !== 0)
        setProducts((previousData) => [...previousData, ...data.products]);

      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setProductsLimitReached(true);
  }, [products]);

  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  return (
    <div className="container">
      <h1>Infinite Scrolling</h1>
      <div className="product-container">
        <RenderProducts products={products} />
      </div>
      <div className="button-container">
        <button
          className="load-more-button"
          onClick={() => setCount(count + 1)}
          disabled={isProductsLimitReached}
        >
          Load More
        </button>
        <dialog id="dialog" open={isProductsLimitReached}>
          <p>You have now reached the limit of 100 products!</p>
          <form method="dialog">
            <button className="close-modal-button">Close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default LoadMoreData;
