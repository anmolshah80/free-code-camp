import { useState, useEffect } from 'react';

import fetchData from 'lib/fetchData';

import { AiOutlineLoading } from 'react-icons/ai';

import './styles.css';

const ProductTitle = ({ data }) => {
  if (!data || data.length === 0) return null;

  return data.map((item) => <p key={item.id}>{item.title}</p>);
};

const ScrollIndicator = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    fetchData(apiUrl, setLoading, setData, setErrorMessage);
  }, [apiUrl]);

  const handleScrollPercentage = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const progressBarWidth = `${scrollPercentage}%`;
  const progressBarBorder = scrollPercentage === 0 && 'none';

  console.log('Scroll Percentage: ', scrollPercentage);

  if (loading) return <AiOutlineLoading className="loading-icon" />;

  if (errorMessage !== '')
    return <p className="error-message">Error: {errorMessage}</p>;

  return (
    <>
      <article className="top-container">
        <h1>Linear Scroll Indicator</h1>
        <section className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: progressBarWidth, borderRight: progressBarBorder }}
          ></div>
        </section>
      </article>
      <div className="data-container">
        <ProductTitle data={data} />
      </div>
    </>
  );
};

export default ScrollIndicator;
