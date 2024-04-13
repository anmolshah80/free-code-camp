const SliderIndicator = ({ images, currentSlide, setCurrentSlide }) => {
  if (!images || images.length === 0) return null;

  return images.map((_, index) => (
    <button
      key={index}
      className={
        currentSlide === index
          ? 'current-indicator'
          : 'current-indicator remove-inactive-indicator'
      }
      onClick={() => setCurrentSlide(index)}
    ></button>
  ));
};

export default SliderIndicator;
