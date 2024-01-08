export function NavItem({ children, link = "#" }) {
  return (
    <li>
      <a
        href={link}
        className="relative font-extrabold text-blue-900 md:font-normal md:text-blue-800 md:after:absolute md:after:left-0 md:after:top-[58px] md:after:w-full md:hover:text-blue-900 md:hover:after:h-1 md:hover:after:bg-orange-200"
      >
        {children}
      </a>
    </li>
  );
}
