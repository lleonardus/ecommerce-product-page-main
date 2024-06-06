import { useState } from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import NavItem from "./NavItem";
import Cart from "./Cart";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-[1000] flex items-center justify-between gap-6 p-6 md:border-b md:border-b-blue-700/40 md:py-10 lg:px-0">
      <div className="flex items-center gap-6">
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className={`aspect-square min-w-4 bg-no-repeat md:hidden ${isOpen ? "fixed left-6 z-[99999] bg-[url('images/icon-close.svg')]" : "bg-[url('images/icon-menu.svg')]"}`}
        ></button>
        <Logo />
        <NavList isOpen={isOpen}>
          <NavItem href="/">Collections</NavItem>
          <NavItem href="/">Men</NavItem>
          <NavItem href="/">Women</NavItem>
          <NavItem href="/">About</NavItem>
          <NavItem href="/">Contact</NavItem>
        </NavList>
      </div>
      <div className="flex items-center gap-8">
        <Cart />
        <button className="aspect-square w-6 bg-[url('images/image-avatar.png')] bg-cover bg-no-repeat hover:rounded-full hover:outline hover:outline-[2px] hover:outline-orange-200 md:w-10"></button>
      </div>
    </header>
  );
}

export default Header;
