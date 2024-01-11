import { useState } from "react";
import { ArrowButton } from "./ArrowButton";

const MIN_SNEAKER_NUMBER = 1;
const MAX_SNEAKER_NUMBER = 4;

export function Main() {
  const [sneakerNumber, setSneakerNumber] = useState(MIN_SNEAKER_NUMBER);

  function handleClickLeft() {
    setSneakerNumber((num) =>
      num > MIN_SNEAKER_NUMBER ? num - 1 : MAX_SNEAKER_NUMBER,
    );
  }

  function handleClickRight() {
    setSneakerNumber((num) =>
      num < MAX_SNEAKER_NUMBER ? num + 1 : MIN_SNEAKER_NUMBER,
    );
  }

  return (
    <main className="relative">
      <ArrowButton position="left" handleClick={handleClickLeft} />
      <div>
        <img
          src={`images/image-product-${sneakerNumber}.jpg`}
          alt="sneaker"
          className="w-full"
        />
      </div>
      <ArrowButton position="right" handleClick={handleClickRight} />
    </main>
  );
}
