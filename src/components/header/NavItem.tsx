interface NavItemInterface {
  title: string;
  anchor: string;
}
const NavItem: React.FC<NavItemInterface> = ({ title, anchor }) => {
  return (
    <a
      className="group flex items-center py-3 hover:cursor-pointer"
      href={anchor}
    >
      <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200" />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
        {title}
      </p>
    </a>
  );
};

export default NavItem;
