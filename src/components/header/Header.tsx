import { IconType } from "react-icons";
interface HeaderInterface {
  name: string;
  position: string;
  tagLine: string;
  nav: string[];
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
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          {name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {position}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{tagLine}</p>

        <nav className="nav ">
          <ul className="mt-16 w-max">
            {nav.map((navItem, index) => (
              <li key={index}>
                <a className="group flex items-center py-3 hover:cursor-pointer">
                  <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                    {navItem}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="gap-3 mt-8 flex items-center">
        {socials.map((social, index) => (
          <li key={index} className="hover:text-slate-200 transition-colors">
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
