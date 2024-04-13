const SliderIndicator = ({ images, currentSlide, setCurrentSlide }) => {
  if (!images || images.length === 0) return null;

  return images.map((_, index) => {
    const sliderButtonClassName =
      currentSlide === index
        ? 'current-indicator'
        : 'current-indicator remove-inactive-indicator';

    return (
      <button
        key={index}
        className={sliderButtonClassName}
        onClick={() => setCurrentSlide(index)}
      ></button>
    );
  });
};

export default SliderIndicator;
