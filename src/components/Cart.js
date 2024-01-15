import { useState } from "react";

export function Cart({ numberOfSneakers, setNumberOfSneakers }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:relative">
      <div
        className={`relative w-8 hover:cursor-pointer hover:text-blue-900 ${
          isOpen ? "text-blue-900" : "text-blue-800"
        }`}
        onClick={() => setIsOpen((open) => !open)}
      >
        {numberOfSneakers > 0 && (
          <div className="absolute -top-2 left-2 rounded-xl bg-orange-200 px-2 text-xs font-bold text-white">
            {numberOfSneakers}
          </div>
        )}
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute left-[50%] top-20 z-10 w-[95%] min-w-[18rem] max-w-[30rem] translate-x-[-50%] rounded-xl bg-white shadow-2xl md:min-w-[23rem] md:-translate-x-72">
          <div className="border-b border-b-blue-700/40">
            <p className="p-5 font-bold text-blue-900">Cart</p>
          </div>
          {numberOfSneakers > 0 ? (
            <div className="flex flex-col gap-6 px-4 pb-8 pt-4">
              <div className="flex items-center justify-between gap-5">
                <div className="w-10 overflow-hidden rounded-sm">
                  <img
                    src="images/image-product-1-thumbnail.jpg"
                    alt="sneaker"
                  />
                </div>
                <div className="text-blue-800">
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125.00 x {numberOfSneakers}
                    <span className="font-bold text-blue-900">
                      {" "}
                      {numberOfSneakers * 125}.00
                    </span>
                  </p>
                </div>
                <div
                  className="h-2 w-5 cursor-pointer"
                  onClick={() => setNumberOfSneakers(0)}
                >
                  <img src="images/icon-delete.svg" alt="trash" />
                </div>
              </div>
              <button
                className="flex w-full justify-center gap-4 rounded-xl bg-orange-200 py-4 font-bold text-white hover:bg-orange-200/70"
                onClick={() => setNumberOfSneakers(0)}
              >
                Checkout
              </button>
            </div>
          ) : (
            <p className="py-24 text-center font-bold text-blue-800 md:py-20">
              Your cart is empty.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
