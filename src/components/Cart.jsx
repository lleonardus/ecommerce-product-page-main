import { useState } from "react";
import CartIcon from "./CartIcon";
import CartItemList from "./CartItemList";
import CartItem from "./CartItem";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:relative">
      <CartIcon onClick={() => setIsOpen((isOpen) => !isOpen)} />
      {isOpen && (
        <div className="absolute left-[50%] top-20 w-[96%] max-w-96 translate-x-[-50%] rounded-lg bg-white shadow-xl shadow-black/15 sm:-left-72 sm:w-96 sm:translate-x-0 xl:-left-56">
          <p className="border-b border-b-blue-700/40 py-5 pl-5 font-bold">
            Cart
          </p>
          <div className="grid h-48 overflow-y-scroll lg:h-44">
            <p className="hidden font-bold text-blue-800">
              Your cart is empty.
            </p>
            <CartItemList>
              <CartItem />
            </CartItemList>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
