import { useState } from "react";
import { Cart } from "./Cart";
import { NavList } from "./NavList";

export function Header({ numberOfSneakers, setNumberOfSneakers }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between px-5 pb-6 md:border-b md:border-b-blue-700/40 md:pb-10">
      <div className="grid max-w-16 grid-cols-2 items-center md:flex md:max-w-none md:gap-12">
        <button
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className={`z-[99999] aspect-square w-4 bg-no-repeat md:hidden ${
            isMenuOpen
              ? "fixed bg-[url(../public/images/icon-close.svg)]"
              : "bg-[url(../public/images/icon-menu.svg)]"
          }`}
        ></button>
        <div className="w-36">
          <a href="/">
            <img src="./images/logo.svg" alt="logo" />
          </a>
        </div>
        <NavList isMenuOpen={isMenuOpen} />
      </div>
      <div className="flex items-center gap-5">
        <Cart
          numberOfSneakers={numberOfSneakers}
          setNumberOfSneakers={setNumberOfSneakers}
        />
        <div className="w-7 rounded-full border-[2px] border-solid border-white hover:cursor-pointer hover:border-orange-200 md:w-11">
          <img src="./images/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
}
