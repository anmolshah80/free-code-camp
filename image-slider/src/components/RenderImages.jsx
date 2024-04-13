const RenderImages = ({ images, currentSlide }) => {
  if (!images || images.length === 0) return null;

  return images.map((image, index) => (
    <img
      key={image.id}
      alt={image.author}
      src={image.download_url}
      className={
        currentSlide === index
          ? 'current-image'
          : 'current-image hide-current-image'
      }
    />
  ));
};

export default RenderImages;
