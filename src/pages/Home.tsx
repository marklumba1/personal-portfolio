import user from "../mark";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
const Home: React.FC = () => {
  const { name, tagLine, position, nav, socials } = user;
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header
          name={name}
          position={position}
          tagLine={tagLine}
          nav={nav}
          socials={socials}
        />
        <Main />
      </div>
    </div>
  );
};

export default Home;
