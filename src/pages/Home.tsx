import user from "../mark";
import Header from "../components/Header";
const Home: React.FC = () => {
  const { name, tagLine, position, nav } = user;
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <Header name={name} position={position} tagLine={tagLine} nav={nav} />
    </div>
  );
};

export default Home;
