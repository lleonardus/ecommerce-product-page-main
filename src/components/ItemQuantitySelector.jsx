import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";

function ItemQuantitySelector() {
  return (
    <div className="flex justify-between rounded-lg bg-blue-100 px-5 py-3 lg:w-[40%] lg:min-w-32 lg:py-4">
      <MinusButton />
      <span className="font-bold text-blue-900">0</span>
      <PlusButton />
    </div>
  );
}

export default ItemQuantitySelector;
