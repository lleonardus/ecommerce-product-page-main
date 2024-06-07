import { useCart } from "../hooks/useCart";
import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";

function ItemQuantitySelector() {
  const { quantity } = useCart();

  return (
    <div className="flex justify-between rounded-lg bg-blue-100 px-5 py-4 lg:w-[40%] lg:min-w-32">
      <MinusButton />
      <span className="font-bold text-blue-900">{quantity}</span>
      <PlusButton />
    </div>
  );
}

export default ItemQuantitySelector;
