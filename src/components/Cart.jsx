import { useState } from "react";
import CartIcon from "./CartIcon";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:relative">
      <CartIcon onClick={() => setIsOpen((isOpen) => !isOpen)} />
      {isOpen && (
        <div className="absolute left-[50%] top-20 w-[96%] translate-x-[-50%] rounded-lg bg-white shadow-xl shadow-black/15 md:-left-72 md:w-96 md:translate-x-0 xl:-left-56">
          <p className="border-b border-b-blue-700/40 py-5 pl-5 font-bold">
            Cart
          </p>
          <div className="grid h-56 place-items-center lg:h-44">
            <p className="font-bold text-blue-800">Your cart is empty.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
