import { useState } from "react";
import { NavList } from "./NavList";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between md:border-b md:border-b-blue-700/40 md:pb-10">
      <div className="grid max-w-16 grid-cols-2 items-center md:flex md:max-w-none md:gap-12">
        <button
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className={`z-[99999] aspect-square w-4 bg-no-repeat md:hidden ${
            isMenuOpen
              ? "bg-[url(../public/images/icon-close.svg)]"
              : "bg-[url(../public/images/icon-menu.svg)]"
          }`}
        ></button>
        <div className="w-36">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <NavList isMenuOpen={isMenuOpen} />
      </div>
      <div className="flex items-center gap-5">
        <div className="w-8 text-blue-800 hover:cursor-pointer hover:text-blue-900">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="currentColor"
              fillRule="nonzero"
            />
          </svg>
        </div>
        <div className="w-7 rounded-full border-[2px] border-solid border-white hover:cursor-pointer hover:border-orange-200 md:w-11">
          <img src="./images/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
}
