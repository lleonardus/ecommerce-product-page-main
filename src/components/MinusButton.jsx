import { useCart } from "../hooks/useCart";

function MinusButton() {
  const { decrementQuantity } = useCart();

  return (
    <button
      onClick={decrementQuantity}
      className="text-orange-200 hover:text-orange-200/80"
    >
      <svg
        width="12"
        height="4"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
            id="a"
          />
        </defs>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#a" />
      </svg>
    </button>
  );
}

export default MinusButton;
