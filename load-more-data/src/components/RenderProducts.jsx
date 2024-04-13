const RenderProducts = ({ products }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return products.map((product, index) => (
    <div className="product" key={index}>
      <img
        className="product-image"
        src={product.thumbnail}
        alt={product.title}
      />
      <span className="product-title" title={product.title}>
        {product.title}
      </span>
      <div className="brand-info-wrapper">
        <span className="product-brand" title={product.brand}>
          {product.brand}
        </span>
        <span className="product-price">${product.price}</span>
      </div>
    </div>
  ));
};

export default RenderProducts;
