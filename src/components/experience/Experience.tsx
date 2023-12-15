interface ExperienceInterface {
  date: string;
  company: string;
  position: string;
  description: string;
  techs: string[];
}

const Experience: React.FC<ExperienceInterface> = ({
  date,
  company,
  position,
  description,
  techs,
}) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

      <p className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {date}
      </p>
      <div className="z-10 flex flex-col gap-3 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <p className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-base">
            {company}
          </p>
          <p className="text-slate-500 mt-2">{position}</p>
        </h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-3">
          {techs.map((tech, index) => (
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

export default Experience;
