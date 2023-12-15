interface HeaderInterface {
  name: string;
  position: string;
  tagLine: string;
  nav: string[];
}
const Header: React.FC<HeaderInterface> = ({
  name,
  position,
  tagLine,
  nav,
}) => {
  return (
    <header>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          {name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {position}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{tagLine}</p>
      </div>
      <nav className="hidden lg:block">
        <ul className="mt-16 w-max">
          {nav.map((navItem, index) => (
            <li key={index}>{navItem}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
