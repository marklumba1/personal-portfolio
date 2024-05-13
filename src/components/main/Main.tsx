import Section from "../section/Section";
import user from "../../mark";
import List from "../list/List";
import Link from "../link/Link";

const Main: React.FC = () => {
  const { experiences, projects } = user;

  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <Section title="about">
        <p className="mb-4">
          My name is <b>Mark</b>, and I like to work with JavaScript. My web
          programming adventure began in college, when I took my first coding
          classes, which taught me the fundamentals of web development.
        </p>
        <p>
          Working for large corporations and various government agencies over
          the years, I've gained knowledge and experiences that are now helping
          me to advance my career and be more effective on what I do. I'm
          currently honing my React, Vue, and API Programming skills in order to
          create more complex web apps.
        </p>
      </Section>

      <Section title="experience">
        <List data={experiences} component="exp" />
        <Link text={"View Full Resume"} link={`google.com`} className="mt-8" />
      </Section>

      <Section title="projects">
        <List data={projects} component="proj" />
      </Section>

      <footer>
        <div className="flex flex-col items-start md:items-center text-xs md:text-sm opacity-80">
          <p>Built by Mark Lumba 2024 </p>
          <p>
            Designed Inspiration from{" "}
            <a href="https://brittanychiang.com/">Brittany Chiang</a>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Main;
