import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import s1 from "../../../assets/slider-Images/s1.jpg";
import s2 from "../../../assets/slider-Images/s2.jpg";
import s3 from "../../../assets/slider-Images/s3.jpg";
import s4 from "../../../assets/slider-Images/s4.jpg";

const Slider = () => {
  return (
    <div className="text-center">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        <div className="relative">
          <div className=" absolute top-[20%] w-60 md:w-[350px] lg:w-[450px] md:ml-12  lg:ml-28 ">
            <h2 className="text-lg md:text-2xl lg:text-3xl slider_header">
              Step Into the Future: Explore Cutting-Edge Laptops Right Here!
            </h2>
          </div>
          <img src={s1} />
        </div>
        <div>
          <div className=" absolute lg:top-[10%] bottom-[10%] md:bottom-[30%] right-16 w-56 md:w-[300px] lg:w-[450px] ">
            <h2 className="text-lg md:text-xl lg:text-3xl slider_header text-cardTextColor">
            Retro Revival: Nostalgic Mobile Phone Designs Make a Comeback
            </h2>
          </div>
          <img src={s2} />
        </div>
        <div>
          <div className=" absolute top-[20%] w-60 md:w-[350px] lg:w-[450px] md:ml-12  lg:ml-28 ">
            <h2 className="text-lg md:text-2xl lg:text-3xl slider_header">
            Game-Changing Hybrid Headphones Combine Wired and Wireless Technology
            </h2>
          </div>
          <img src={s3} />
        </div>
        <div>
          <div className=" absolute top-[20%] w-60 md:w-[350px] lg:w-[450px] md:ml-12  lg:ml-28 ">
            <h2 className="text-lg md:text-2xl lg:text-3xl slider_header text-gray-600">
            High-Fidelity Home Audio: Premium Speakers Deliver Concert-Quality Sound
            </h2>
          </div>
          <img src={s4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
