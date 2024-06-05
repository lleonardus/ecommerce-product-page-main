function Thumbnail({ index, selectedId, onClick }) {
  const isSelected = index === selectedId;

  return (
    <li
      onClick={() => onClick(index)}
      className={`relative w-24 cursor-pointer overflow-hidden rounded-xl after:inset-0 after:bg-white/65 hover:hover:hover:after:absolute ${isSelected ? "border-[2px] border-orange-200 after:absolute after:inset-0 after:bg-white/65" : ""}`}
    >
      <img
        src={`images/image-product-${index}-thumbnail.jpg`}
        alt="sneaker thumbnail"
      />
    </li>
  );
}

export default Thumbnail;
