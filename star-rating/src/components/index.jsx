import { useState } from 'react';

import './styles.css';
import { FaStar } from 'react-icons/fa';

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
    <div className="star-rating-wrapper">
      <h1>Rate this product</h1>
      <div className="star-rating">
        {[...Array(numberOfStars)].map((_, index) => {
          index += 1;

          const isStarHoveredOrRated = index <= (hover || rating);

          return (
            <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
              className={isStarHoveredOrRated ? 'active' : 'inactive'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
