
import Discount from "../discount/Discount";
import Feedback from "../feedback/Feedback";
import Slider from "../hero/Slider";
import SecondaryHome from "../secondaryHome/SecondaryHome";
import TechTrends from "../techTrends/TechTrends";

const Home = () => {
  return (
    <div className="">
      <Slider />
      <div className="px-5 md:px-10 lg:px-20">
        <TechTrends />
        <Discount />
        <SecondaryHome />
        <Feedback />
      </div>
    </div>
  );
};

export default Home;
