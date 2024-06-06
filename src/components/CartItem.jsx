import { useCart } from "../hooks/useCart";
import DeleteIcon from "./DeleteIcon";

function CartItem({ index, imageIndex, quantity }) {
  const { removeItem } = useCart();

  return (
    <li className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <div className="w-12 overflow-hidden rounded-sm">
          <img
            src={`images/image-product-${imageIndex}-thumbnail.jpg`}
            alt="product"
          />
        </div>
        <div className="text-blue-800">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x {quantity}
            <span className="font-bold text-black"> ${125 * quantity}.00</span>
          </p>
        </div>
        <DeleteIcon onClick={() => removeItem(index)} />
      </div>
      <button
        className="rounded-lg bg-orange-200 py-4 font-bold text-white hover:bg-orange-200/80"
        onClick={() => removeItem(index)}
      >
        Checkout
      </button>
    </li>
  );
}

export default CartItem;
