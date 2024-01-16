export function SneakerItem({ sneakerId, selectedSneaker, setSneakerId }) {
  const isSelectedSneaker = sneakerId === selectedSneaker;

  return (
    <li
      onClick={() => setSneakerId(sneakerId)}
      className={`relative cursor-pointer overflow-hidden rounded-2xl hover:after:absolute hover:after:inset-0 hover:after:bg-white/50 ${
        isSelectedSneaker
          ? "outline outline-[3px] outline-orange-200 after:absolute after:inset-0 after:bg-white/70 "
          : ""
      }`}
    >
      <img
        src={`images/image-product-${sneakerId}-thumbnail.jpg`}
        alt="sneaker thumbnail"
      />
    </li>
  );
}
