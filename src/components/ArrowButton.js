export function ArrowButton({ position }) {
  return (
    <button
      className={`absolute top-[50%] grid aspect-square w-10 translate-y-[-50%] place-items-center rounded-full bg-white text-blue-900 hover:text-orange-200 ${
        position === "right" ? "right-3" : "left-3 rotate-180"
      }
      `}
    >
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke="currentColor"
          stroke-width="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}
