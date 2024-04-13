const RenderImages = ({ images, currentSlide }) => {
  if (!images || images.length === 0) return null;

  return images.map((image, index) => {
    const className =
      currentSlide === index
        ? 'current-image'
        : 'current-image hide-current-image';

    return (
      <img
        key={image.id}
        alt={image.author}
        src={image.download_url}
        className={className}
      />
    );
  });
};

export default RenderImages;
