function NavItem({ children, href }) {
  return (
    <li>
      <a
        href={href}
        className="relative font-bold text-blue-900 md:font-normal md:text-blue-800 md:after:absolute md:after:left-[50%] md:after:top-[4.1rem] md:after:w-0 md:after:translate-x-[-50%] md:after:transition-[width] md:hover:text-blue-900 md:hover:transition-colors md:hover:after:h-1 md:hover:after:w-full md:hover:after:bg-orange-200"
      >
        {children}
      </a>
    </li>
  );
}

export default NavItem;
