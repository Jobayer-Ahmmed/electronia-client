import AC from "../ac/AC";
import Discount from "../discount/Discount";
import Slider from "../hero/Slider";
import KitchenGadgets from "../kitchenGadgets/KitchenGadgets";
import Laptop from "../laptop/Laptop";
import Phone from "../phone/Phone";
import Refrigerator from "../refrigerator/Refrigerator";
import TechTrends from "../techTrends/TechTrends";

const Home = () => {
  return (
    <div className="">
      <Slider />
      <div className="px-5 md:px-10 lg:px-20">
        <Discount />
        <TechTrends />
        <Laptop/>
        <Phone/>
        <KitchenGadgets/>
        <Refrigerator/>
        <AC/>
      </div>
    </div>
  );
};

export default Home;
