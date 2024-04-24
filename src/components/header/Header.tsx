import { IconType } from "react-icons";
import NavItem from "./NavItem";
interface HeaderInterface {
  name: string;
  position: string;
  tagLine: string;
  nav: {
    title: string;
    anchor: string;
  }[];
  socials: {
    icon: IconType;
    link: string;
  }[];
}
const Header: React.FC<HeaderInterface> = ({
  name,
  position,
  tagLine,
  nav,
  socials,
}) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1>{name}</h1>
        <h2 className="mt-3">{position}</h2>
        <p className="mt-4 max-w-xs leading-normal">{tagLine}</p>

        <nav className="nav ">
          <ul className="mt-16 w-max">
            {nav.map((navItem, index) => (
              <li key={index}>
                <NavItem {...navItem} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="gap-6 mt-8 flex items-center">
        {socials.map((social, index) => (
          <li
            key={index}
            className="hover:text-slate-200 transition-colors lg:text-2xl md:text-xl"
          >
            <a href={social.link}>
              <social.icon />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
