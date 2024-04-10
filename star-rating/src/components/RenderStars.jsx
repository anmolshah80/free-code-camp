import { FaStar } from 'react-icons/fa';

const RenderStars = ({
  numberOfStars,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  hover,
  rating,
}) => {
  return [...Array(numberOfStars)].map((_, index) => {
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
  });
};

export default RenderStars;
