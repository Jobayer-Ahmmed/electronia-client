import Discount from "../discount/Discount";
import Slider from "../hero/Slider";
import TechTrends from "../techTrends/TechTrends";

const Home = () => {
  return (
    <div className="">
      <Slider />
      <div className="px-5 md:px-10 lg:px-20">
        <Discount />
        <TechTrends />
      </div>
    </div>
  );
};

export default Home;
