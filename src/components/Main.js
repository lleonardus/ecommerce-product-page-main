import { useState } from "react";
import { ArrowButton } from "./ArrowButton";

const MIN_SNEAKER_ID = 1;
const MAX_SNEAKER_ID = 4;

export function Main() {
  const [sneakerId, setSneakerId] = useState(MIN_SNEAKER_ID);

  return (
    <main>
      <Gallery sneakerId={sneakerId} setSneakerId={setSneakerId} />
    </main>
  );
}

function Gallery({ sneakerId, setSneakerId }) {
  function handleClickLeft() {
    setSneakerId((num) => (num > MIN_SNEAKER_ID ? num - 1 : MAX_SNEAKER_ID));
  }

  function handleClickRight() {
    setSneakerId((num) => (num < MAX_SNEAKER_ID ? num + 1 : MIN_SNEAKER_ID));
  }

  return (
    <div>
      <div className="relative">
        <div className="md:hidden">
          <ArrowButton position="left" handleClick={handleClickLeft} />
        </div>
        <div className="overflow-hidden md:rounded-2xl">
          <img
            src={`images/image-product-${sneakerId}.jpg`}
            alt="sneaker"
            className="w-full"
          />
        </div>
        <div className="md:hidden">
          <ArrowButton position="right" handleClick={handleClickRight} />
        </div>
      </div>
      <SneakerList selectedSneaker={sneakerId} setSneakerId={setSneakerId} />
    </div>
  );
}

function SneakerList({ selectedSneaker, setSneakerId }) {
  return (
    <ul className="hidden pt-10 md:flex md:justify-between md:gap-5">
      {Array.from({ length: MAX_SNEAKER_ID }, (_, i) => i + 1).map(
        (sneakerId) => (
          <SneakerItem
            sneakerId={sneakerId}
            selectedSneaker={selectedSneaker}
            setSneakerId={setSneakerId}
            key={sneakerId}
          />
        ),
      )}
    </ul>
  );
}

function SneakerItem({ sneakerId, selectedSneaker, setSneakerId }) {
  const isSelectedSneaker = sneakerId === selectedSneaker;

  return (
    <li
      onClick={() => setSneakerId(sneakerId)}
      className={`relative cursor-pointer overflow-hidden rounded-2xl hover:after:absolute hover:after:inset-0 hover:after:bg-white/50 ${
        isSelectedSneaker &&
        "outline outline-[4px] outline-orange-200 after:absolute after:inset-0 after:bg-white/70 "
      }`}
    >
      <img
        src={`images/image-product-${sneakerId}-thumbnail.jpg`}
        alt="sneaker thumbnail"
      />
    </li>
  );
}
