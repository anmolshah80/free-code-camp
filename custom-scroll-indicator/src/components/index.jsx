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

    const currentScrollPercentage = (scrolled / height) * 100;

    setScrollPercentage(currentScrollPercentage);

    // Source -> https://github.com/DeeterCesler/circle-scroll/blob/main/src/Scroller.jsx

    const bodyElement = document.querySelector('.body-content');

    const bottomOfContent =
      bodyElement.getBoundingClientRect().height +
      window.scrollY +
      bodyElement.getBoundingClientRect().top;

    const scrollPercentAccelerator =
      1 +
      (bodyElement.getBoundingClientRect().top + window.scrollY) /
        bottomOfContent;

    const scrollDistance =
      window.scrollY +
      window.innerHeight -
      (bodyElement.getBoundingClientRect().top + window.scrollY);

    const scrollPercentage = Math.min(
      ((scrollDistance * scrollPercentAccelerator) / bottomOfContent) * 100,
      100,
    );

    const magicMultiplier = 2;
    const magicNumber = 200;
    const circleFill = 40;
    const offSet = Math.max(
      -40,
      magicNumber - scrollPercentage * magicMultiplier,
    );

    const checkedOffset =
      offSet >= magicNumber ? magicNumber : offSet + circleFill;

    document
      .getElementById('circle-lol')
      .getAttribute('stroke-dashoffset', `${checkedOffset}`);

    if (offSet < magicNumber - circleFill) {
      const whiteWrapperElement = document.querySelector('.white-wrapper');

      whiteWrapperElement.classList.remove('hidden');
      whiteWrapperElement.classList.add('pop-in-initial');
    }

    const circleProgressionPercentage = parseInt(
      document.getElementById('circle-lol').getAttribute('stroke-dashoffset'),
    );

    if (
      circleProgressionPercentage <= circleFill &&
      document.querySelector('.checkmark').classList.contains('hidden')
    ) {
      const checkmarkElement = document.querySelector('.checkmark');

      checkmarkElement.classList.remove('hidden');
      checkmarkElement.classList.add('pop-in');

      const xMarkElement = document.querySelector('.x-mark');

      xMarkElement.classList.add('hidden');
      xMarkElement.classList.remove('pop-in');

      document.getElementById('circle-lol').classList.add('grey-out');
    }

    // this is a separate if-check to prevent adding the class repeatedly
    if (
      circleProgressionPercentage > circleFill &&
      document.querySelector('.checkmark').classList.contains('pop-in')
    ) {
      const checkmarkElement = document.querySelector('.checkmark');

      checkmarkElement.classList.add('hidden');
      checkmarkElement.classList.remove('pop-in');

      const xMarkElement = document.querySelector('.x-mark');

      xMarkElement.classList.remove('hidden');
      xMarkElement.classList.add('pop-in');

      document.getElementById('circle-lol').classList.remove('grey-out');
    }
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
      <div className="body-content">
        <a href="#" style={{ maxHeight: 80 }}>
          <div className="check-mark-wrapper">
            <div className="circle-background"></div>
            <div className="circle-wrapper">
              <svg
                viewBox="0 0 100 100"
                height="150px"
                xmlns="http://www.w3.org/2000/svg"
                id="circle-wrapper"
              >
                <circle
                  id="circle-lol"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="25"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="200%"
                  strokeDashoffset="200%"
                />
              </svg>
            </div>
            <div className="checkmark hidden">
              <svg
                width="82px"
                height="82px"
                viewBox="0 0 100 100"
                id="check"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="color">
                  <path
                    fill="#000"
                    d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z"
                  />
                </g>
                <g id="line">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="5"
                    d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"
                  />
                </g>
                <g id="line">
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1"
                    d="m10.5 39.76 17.42 17.44 33.58-33.89-8.013-8.013-25.71 25.71-9.26-9.26z"
                  />
                </g>
              </svg>
            </div>
            <div className="x-mark">
              <svg
                id="x-icon"
                fill="#000"
                width="40px"
                height="40px"
                viewBox="0 0 460.775 460.775"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
            <div className="white-wrapper hidden">
              <svg
                viewBox="0 0 100 100"
                height="150px"
                xmlns="http://www.w3.org/2000/svg"
                id="white-circle"
              >
                <circle
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="29"
                  strokeWidth="2"
                  fill="white"
                  strokeDasharray="315"
                  strokeDashoffset="315"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
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
        {/* <div className="cross-icon-container">
          <div
            className={`circular-progress-bar`}
            style={{ width: progressBarWidth }}
          ></div>
          <RxCross1 className="cross-icon circular-indicator" />
        </div> */}
      </section>
    </>
  );
};

export default ScrollIndicator;
