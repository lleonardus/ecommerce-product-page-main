import { useState } from "react";
import { useCart } from "../hooks/useCart";
import CartIcon from "./CartIcon";
import CartItemList from "./CartItemList";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const totalOfItems = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="sm:relative">
      <CartIcon
        totalOfItems={totalOfItems}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      />
      {isOpen && (
        <div className="absolute left-[50%] top-20 w-[96%] max-w-96 translate-x-[-50%] rounded-lg bg-white shadow-xl shadow-black/15 sm:-left-72 sm:w-96 sm:translate-x-0 xl:-left-56">
          <p className="border-b border-b-blue-700/40 py-5 pl-5 font-bold">
            Cart
          </p>
          <div
            className={`h-48 overflow-y-scroll lg:h-44 ${totalOfItems === 0 ? "grid place-items-center" : ""}`}
          >
            {totalOfItems > 0 ? (
              <CartItemList>
                {items.map((item, i) => (
                  <CartItem
                    key={i}
                    index={item.index}
                    imageIndex={item.imageIndex}
                    quantity={item.quantity}
                  />
                ))}
              </CartItemList>
            ) : (
              <EmptyCart />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
