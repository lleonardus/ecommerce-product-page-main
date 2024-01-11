import { ArrowButton } from "./ArrowButton";
import { SneakerList } from "./SneakerList";
import { useState } from "react";

export const MIN_SNEAKER_ID = 1;
export const MAX_SNEAKER_ID = 4;

export function Gallery() {
  const [sneakerId, setSneakerId] = useState(MIN_SNEAKER_ID);

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
