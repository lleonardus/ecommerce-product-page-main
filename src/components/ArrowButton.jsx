// position can be only 'right' or 'left'
function ArrowButton({ position, onClick }) {
  return (
    <div
      className={`absolute bottom-[50%] grid aspect-square w-10 translate-y-[50%] cursor-pointer place-items-center rounded-full bg-white text-blue-900 hover:text-orange-200 ${position === "left" ? "left-4 rotate-180 lg:left-0 lg:translate-x-[-50%]" : "right-4 lg:right-0 lg:translate-x-[50%]"}`}
      onClick={onClick}
    >
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
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
