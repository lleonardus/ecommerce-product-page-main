export function NavItem({ children, link = "#" }) {
  return (
    <li className="font-extrabold text-blue-900 md:font-normal md:text-blue-800 md:hover:text-blue-900">
      <a href={link}>{children}</a>
    </li>
  );
}
