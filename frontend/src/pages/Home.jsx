
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Featured from "../components/Home/Featured/Featured";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import CarNews from "../components/Home/News/CarNews";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <WhyUs />
      <CarNews />
    </>
  );
};

export default Home;
