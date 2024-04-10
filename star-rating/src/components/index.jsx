import { useState } from 'react';

import RenderStars from './RenderStars';

import './styles.css';

const StarRating = ({ numberOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <>
      <h1>Rate this product</h1>
      <div className="star-rating">
        <RenderStars
          numberOfStars={numberOfStars}
          handleClick={handleClick}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          hover={hover}
          rating={rating}
        />
      </div>
    </>
  );
};

export default StarRating;
