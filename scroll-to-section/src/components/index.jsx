import { AiOutlineLoading } from 'react-icons/ai';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';

import useFetch from 'hooks/useFetch';

import './styles.css';
import { useRef } from 'react';

const RenderProducts = ({ data }) => {
  if (!data) return null;

  const { products } = data;

  if (!products || products.length === 0) return null;

  return (
    <ul className="products-container">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <p className="product-title">{product.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

const ScrollToTopAndBottom = () => {
  const bottomRef = useRef(null);

  const url = 'https://dummyjson.com/products?limit=100';

  const { loading, errorMessage, data } = useFetch(url, {});

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  if (errorMessage) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  return (
    <div>
      <h1>Scroll to Section</h1>
      <div className="main-container">
        <RenderProducts data={data} />
        <div className="scroll-icons-container">
          <FaChevronCircleDown
            className="scroll-bottom-icon"
            onClick={handleScrollToBottom}
          />
          <FaChevronCircleUp
            className="scroll-top-icon"
            onClick={handleScrollToTop}
          />
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ScrollToTopAndBottom;
