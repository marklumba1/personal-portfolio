import Link from "../link/Link";
import { Data } from "./List";
interface ListItemInterface extends Data {
  elementId: number;
}

const ListItem: React.FC<ListItemInterface> = ({
  rightItem,
  title,
  link,
  subTitle,
  description,
  badges,
  elementId,
}) => {
  return (
    <div
      className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover"
      id={elementId.toString()}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

      <p className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {rightItem}
      </p>
      <div className="z-10 flex flex-col gap-1 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <Link text={title} link={link} />
          {subTitle && <p className="text-slate-500 mt-2">{subTitle}</p>}
        </h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-3 mt-1">
          {badges.map((tech, index) => (
            <p
              key={index}
              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
