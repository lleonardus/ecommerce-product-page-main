import { ArrowButton } from "./ArrowButton";
import { SneakerList } from "./SneakerList";
import { useState } from "react";

export const MIN_SNEAKER_ID = 1;
export const MAX_SNEAKER_ID = 4;

export function Gallery() {
  const [sneakerId, setSneakerId] = useState(MIN_SNEAKER_ID);
  const [isOpen, setIsOpen] = useState(false);

  function handleClickLeft() {
    setSneakerId((num) => (num > MIN_SNEAKER_ID ? num - 1 : MAX_SNEAKER_ID));
  }

  function handleClickRight() {
    setSneakerId((num) => (num < MAX_SNEAKER_ID ? num + 1 : MIN_SNEAKER_ID));
  }

  return (
    <>
      <div className="md:max-w-[33rem]">
        <div className="relative">
          <div className="md:hidden">
            <ArrowButton position="left" handleClick={handleClickLeft} />
          </div>
          <div
            className="cursor-pointer overflow-hidden md:rounded-2xl"
            onClick={() => setIsOpen(true)}
          >
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
      {isOpen && (
        <div className="md:fixed md:inset-0 md:z-[9999] md:grid md:place-items-center md:bg-black/75">
          <div
            className={`hidden md:max-w-[33rem]  ${
              isOpen ? "md:block" : "md:hidden"
            }`}
          >
            <div className="relative">
              <div
                className="absolute -top-10 right-0 cursor-pointer text-white hover:text-orange-200"
                onClick={() => setIsOpen(false)}
              >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <ArrowButton position="left" handleClick={handleClickLeft} />
              <div className="overflow-hidden md:rounded-2xl">
                <img
                  src={`images/image-product-${sneakerId}.jpg`}
                  alt="sneaker"
                  className="w-full"
                />
              </div>
              <ArrowButton position="right" handleClick={handleClickRight} />
            </div>
            <div className="px-10">
              <SneakerList
                selectedSneaker={sneakerId}
                setSneakerId={setSneakerId}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
