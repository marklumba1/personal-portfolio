interface LinkInterface {
  text: string;
  link: string;
}
const Link: React.FC<LinkInterface> = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-base gap-2"
    >
      {text}
      <span className="group-hover:-translate-y-1 group-hover:translate-x-[6px] transition-all">
        &#8599;
      </span>
    </a>
  );
};

export default Link;
