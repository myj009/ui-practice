import Header from "../components/Header";
import banner from "../assets/home-banner.png";
import HeroHome from "../components/HeroHome";
import Stats from "../components/Stats";
import FeaturesZigzag from "../components/FeaturesZigzag";

const Home = () => {
  return (
    <>
      <img className="absolute -z-0" src={banner} alt="" />
      <div className="pb-48 flex flex-col justify-start w-screen h-full bg-c-pale-white text-c-purple px-60">
        <Header />
        <HeroHome />
        <Stats />
        <FeaturesZigzag />
      </div>
    </>
  );
};

export default Home;
