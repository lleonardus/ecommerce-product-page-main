function Thumbnail({ index, className }) {
  return (
    <li className={`overflow-hidden rounded-2xl ${className}`}>
      <img
        src={`images/image-product-${index}-thumbnail.jpg`}
        alt="sneaker thumbnail"
      />
    </li>
  );
}

export default Thumbnail;
