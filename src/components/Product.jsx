function Product({ imageIndex, onClick, className }) {
  return (
    <div
      className={`overflow-hidden md:rounded-2xl ${className}`}
      onClick={onClick}
    >
      <img src={`/images/image-product-${imageIndex}.jpg`} alt="product" />
    </div>
  );
}

export default Product;
