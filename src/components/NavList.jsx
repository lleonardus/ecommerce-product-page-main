function NavList({ children, isOpen }) {
  return (
    <nav
      className={`z-[9999] md:static ${isOpen ? "fixed inset-0 h-full bg-black/75" : ""}`}
    >
      <div
        className={`fixed inset-0 h-full transition-transform md:static md:translate-x-0 md:transition-none ${isOpen ? "" : "-translate-x-full"}`}
      >
        <ul
          className={`left-0 z-[1000] flex h-full flex-col gap-5 bg-white pl-6 pr-28 pt-20 md:static md:flex-row md:p-0 ${isOpen ? "fixed" : ""}`}
        >
          {children}
        </ul>
      </div>
    </nav>
  );
}

export default NavList;
