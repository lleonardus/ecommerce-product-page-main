import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";

function ItemQuantitySelector({ quantity, setQuantity }) {
  function handleAdd() {
    setQuantity((quantity) => quantity + 1);
  }

  function handleRemove() {
    setQuantity((quantity) => (quantity > 0 ? quantity - 1 : quantity));
  }

  return (
    <div className="flex justify-between rounded-lg bg-blue-100 px-5 py-3 lg:w-[40%] lg:min-w-32 lg:py-4">
      <MinusButton onClick={handleRemove} />
      <span className="font-bold text-blue-900">{quantity}</span>
      <PlusButton onClick={handleAdd} />
    </div>
  );
}

export default ItemQuantitySelector;
