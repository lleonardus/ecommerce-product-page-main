function Product({ imageIndex, onClick, className }) {
  return (
    <div
      className={`overflow-hidden lg:rounded-2xl ${className}`}
      onClick={onClick}
    >
      <img src={`/images/image-product-${imageIndex}.jpg`} alt="product" />
    </div>
  );
}

export default Product;
