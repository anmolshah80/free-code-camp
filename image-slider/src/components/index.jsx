import { useEffect, useState } from 'react';

import RenderImages from './RenderImages';
import SliderIndicator from './SliderIndicators';

import { AiOutlineLoading } from 'react-icons/ai';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

import './styles.css';

const ImageSlider = ({ apiUrl, page = 1, imagesLimit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (apiUrl) => {
    setLoading(true);

    const imagesUrl = `${apiUrl}?page=${page}&limit=${imagesLimit}`;

    try {
      const response = await fetch(imagesUrl);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (apiUrl !== '') fetchImages(apiUrl);
  }, [apiUrl]);

  if (loading) {
    return <AiOutlineLoading className="loading-icon" />;
  }

  if (errorMessage !== null) {
    return <p className="error-message">Error: {errorMessage}</p>;
  }

  return (
    <div className="container-wrapper">
      <h1 className="title">Image Slider</h1>
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        <RenderImages images={images} currentSlide={currentSlide} />
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          <SliderIndicator
            images={images}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
