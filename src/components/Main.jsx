import { useState } from "react";
import ArrowButton from "./ArrowButton";
import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";
import ThumbnailList from "./ThumbnailList";
import Thumbnail from "./Thumbnail";
import CloseIcon from "./CloseIcon";

const MIN_INDEX = 1;
const MAX_INDEX = 4;

//TODO refactor

function Main() {
  const [index, setIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  function handleClickLeft() {
    setIndex((index) => (index > MIN_INDEX ? index - 1 : MAX_INDEX));
  }

  function handleClickRight() {
    setIndex((index) => (index < MAX_INDEX ? index + 1 : MIN_INDEX));
  }

  function handleIndex(index) {
    setIndex(index);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <main className="z-1 relative lg:flex lg:gap-24 lg:pt-24">
      <section>
        <div>
          <div className="relative">
            <div className="lg:hidden">
              <ArrowButton position={"left"} onClick={handleClickLeft} />
            </div>

            <div
              className="overflow-hidden lg:cursor-pointer lg:rounded-2xl"
              onClick={handleOpen}
            >
              <img src={`/images/image-product-${index}.jpg`} alt="product" />
            </div>
            <div className="lg:hidden">
              <ArrowButton position={"right"} onClick={handleClickRight} />
            </div>
          </div>
          <div className="hidden lg:block">
            <ThumbnailList>
              {Array.from({ length: MAX_INDEX }, (_, i) => (
                <Thumbnail
                  key={i}
                  index={i + 1}
                  selectedId={index}
                  onClick={handleIndex}
                  className={"w-24"}
                />
              ))}
            </ThumbnailList>
          </div>
        </div>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] hidden h-full place-items-center bg-black/75 lg:grid">
            <div className="max-w-lg">
              <div className="relative">
                <div className="absolute -top-10 right-0 w-min">
                  <CloseIcon onClick={handleClose} />
                </div>
                <div className="">
                  <ArrowButton position={"left"} onClick={handleClickLeft} />
                </div>
                <div className="overflow-hidden lg:rounded-2xl">
                  <img
                    src={`/images/image-product-${index}.jpg`}
                    alt="product"
                  />
                </div>
                <div className="">
                  <ArrowButton position={"right"} onClick={handleClickRight} />
                </div>
              </div>
              <div className="flex justify-around">
                <ThumbnailList gap={6}>
                  {Array.from({ length: MAX_INDEX }, (_, i) => (
                    <Thumbnail
                      key={i}
                      index={i + 1}
                      selectedId={index}
                      onClick={handleIndex}
                      className={"w-24"}
                    />
                  ))}
                </ThumbnailList>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="px-6 pt-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-bold tracking-widest text-orange-200">
            SNEAKER COMPANY
          </h2>
          <h1 className="text-3xl font-bold text-blue-900 lg:text-5xl">
            Fall Limited Edition Sneakers
          </h1>
        </div>
        <p className="py-5 text-blue-800 lg:pb-7 lg:pt-10">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-center justify-between pb-8 lg:flex-col lg:items-start lg:gap-2">
          <div className="flex items-center gap-5">
            <p className="text-3xl font-bold text-blue-900">$125.00</p>
            <p className="rounded-lg bg-orange-100 px-2 font-bold text-orange-200">
              50%
            </p>
          </div>
          <p className="font-bold text-blue-700 line-through">$250</p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="flex justify-between rounded-lg bg-blue-100 px-5 py-3 lg:w-[40%] lg:min-w-32 lg:py-4">
            <MinusButton />
            <span className="font-bold text-blue-900">0</span>
            <PlusButton />
          </div>
          <button className="flex items-center justify-center gap-3 rounded-lg bg-orange-200 px-5 py-3 shadow-xl shadow-orange-200/40 hover:bg-orange-200/80 lg:w-[70%] lg:py-4">
            <div className="h-min w-4">
              <img src="images/icon-cart.svg" alt="cart-icon" />
            </div>
            <p className="font-bold text-white">Add to cart</p>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
