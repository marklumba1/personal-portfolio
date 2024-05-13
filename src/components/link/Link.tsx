interface LinkInterface {
  text: string;
  link: string;
  className?: string;
}
const Link: React.FC<LinkInterface> = ({ text, link, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} ${
        !link && `pointer-events-none`
      } group inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 group-hover:text-teal-300 focus-visible:text-teal-300 text-base gap-2`}
    >
      {text}
      {link && (
        <span className="group-hover:-translate-y-1 group-hover:translate-x-[6px] transition-all">
          &#8599;
        </span>
      )}
    </a>
  );
};

export default Link;
