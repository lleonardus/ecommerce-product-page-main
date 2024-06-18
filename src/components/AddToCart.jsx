function AddToCart({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-lg bg-orange-200 px-5 py-4 shadow-xl shadow-orange-200/40 hover:bg-orange-200/80 lg:w-[70%]"
    >
      <div className="h-min w-4">
        <img src="images/icon-cart.svg" alt="cart-icon" />
      </div>
      <p className="font-bold text-white">Add to cart</p>
    </button>
  );
}

export default AddToCart;
