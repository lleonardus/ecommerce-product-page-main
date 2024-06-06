function ArrowButton({ className, onClick }) {
  return (
    <div
      className={`absolute bottom-[50%] aspect-square translate-y-[50%] cursor-pointer text-blue-900 before:absolute before:left-[50%] before:top-[50%] before:z-[-1] before:aspect-square before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-white hover:text-orange-200 ${className}`}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 13 18"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2 1 8 8-8 8"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default ArrowButton;
