import Section from "../section/Section";
import user from "../../mark";
import List from "../list/List";

const Main: React.FC = () => {
  const { experiences } = user;

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
        <List data={experiences} component={"exp"} />
      </Section>
    </main>
  );
};

export default Main;
