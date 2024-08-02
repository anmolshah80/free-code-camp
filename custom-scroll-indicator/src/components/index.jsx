import { useState, useEffect } from 'react';

import fetchData from 'lib/fetchData';

import { AiOutlineLoading } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

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
  const hideProgressBarBorder =
    scrollPercentage === 0 && 'hide-progress-bar-border';

  if (loading) return <AiOutlineLoading className="loading-icon" />;

  if (errorMessage !== '')
    return <p className="error-message">Error: {errorMessage}</p>;

  return (
    <>
      <article className="top-container">
        <h1 className="page-title">Linear Scroll Indicator</h1>
        <section className="scroll-progress-tracking-container">
          <div
            className={`current-progress-bar ${hideProgressBarBorder}`}
            style={{ width: progressBarWidth }}
          ></div>
        </section>
      </article>
      <section className="circular-scroll-container">
        <div className="data-container">
          <ProductTitle data={data} />
        </div>
        <div className="cross-icon-container">
          <div
            className={`circular-progress-bar`}
            style={{ width: progressBarWidth }}
          ></div>
          <RxCross1 className="cross-icon circular-indicator" />
        </div>
      </section>
    </>
  );
};

export default ScrollIndicator;
