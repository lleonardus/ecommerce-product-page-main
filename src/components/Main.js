import { useState } from "react";
import { Gallery } from "./Gallery";

export function Main({ numberOfSneakers, setNumberOfSneakers }) {
  const [counter, setCounter] = useState(numberOfSneakers);

  function handleAddItem() {
    setNumberOfSneakers((num) => counter + num);
    setCounter(0);
  }

  return (
    <main className="md:mt-20 md:grid md:grid-cols-2 md:gap-5 xl:px-10">
      <Gallery />
      <div className="px-5 pt-5  md:max-w-[55ch] lg:pt-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-bold tracking-widest text-orange-200">
            SNEAKER COMPANY
          </h2>
          <h1 className="text-3xl font-bold text-blue-900 md:text-5xl">
            Fall Limited Edition Sneakers
          </h1>
        </div>
        <p className="py-5 text-blue-800 md:pb-7 md:pt-10">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-row items-center justify-between gap-5 pb-8 md:flex-col md:items-start md:gap-2">
          <div className="flex flex-row items-center gap-3">
            <p className="text-3xl font-bold text-blue-900">$125.00</p>
            <p className="rounded-md bg-orange-100 px-2 font-bold text-orange-200">
              50%
            </p>
          </div>
          <p className="font-bold text-blue-700 line-through">$250.00</p>
        </div>
        <div className="flex flex-col gap-4 pb-10 md:flex-row">
          <button className="flex w-full cursor-default items-center justify-between gap-4 rounded-xl bg-blue-100 px-5 py-4 font-bold text-blue-900 md:w-[50%]">
            <div
              className="cursor-pointer hover:opacity-70"
              onClick={() => setCounter((num) => (num > 0 ? num - 1 : 0))}
            >
              <img src="images/icon-minus.svg" alt="minus" />
            </div>
            <p>{counter}</p>
            <div
              className="cursor-pointer hover:opacity-70"
              onClick={() => setCounter((num) => num + 1)}
            >
              <img src="images/icon-plus.svg" alt="plus" />
            </div>
          </button>
          <button
            className="flex w-full justify-center gap-4 rounded-xl bg-orange-200 py-4 font-bold text-white shadow-xl shadow-orange-200/40 hover:bg-orange-200/70"
            onClick={handleAddItem}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}
