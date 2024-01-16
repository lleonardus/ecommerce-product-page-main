export function NavItem({ children, link = "#" }) {
  return (
    <li>
      <a
        href={link}
        className="relative font-extrabold text-blue-900 md:font-normal md:text-blue-800 md:transition-colors md:after:absolute md:after:left-[50%] md:after:top-[68px] md:after:w-0 md:after:translate-x-[-50%] md:after:transition-[width] md:hover:text-blue-900 md:hover:after:h-1 md:hover:after:w-full md:hover:after:bg-orange-200"
      >
        {children}
      </a>
    </li>
  );
}
