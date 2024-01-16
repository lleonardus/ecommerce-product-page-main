import { NavItem } from "./NavItem";

export function NavList({ isMenuOpen }) {
  return (
    <nav
      className={`transition-colors md:static md:block ${
        isMenuOpen ? "fixed inset-0 z-[1000] bg-black/75" : "bg-[transparent]"
      }`}
    >
      <div
        className={`fixed left-0 right-[40%] h-screen bg-white transition-transform md:static md:h-max md:translate-x-0 ${
          isMenuOpen ? "" : "-translate-x-full"
        }`}
      >
        <ul className="mt-24 flex flex-col gap-5 pl-5 md:mt-0 md:flex-row md:pl-0">
          <NavItem link="#">Collections</NavItem>
          <NavItem link="#">Men</NavItem>
          <NavItem link="#">Women</NavItem>
          <NavItem link="#">About</NavItem>
          <NavItem link="#">Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
}
