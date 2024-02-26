import ac from "../../../../assets/secondary-banner/ac.png";
import tv from "../../../../assets/secondary-banner/tv.png";
import kitchen from "../../../../assets/secondary-banner/kitchen.png";
import laptop from "../../../../assets/secondary-banner/laptop.png";
import phone from "../../../../assets/secondary-banner/phone.png";
import refrigerator from "../../../../assets/secondary-banner/refrigerator.png";
import { NavLink } from "react-router-dom";

const SecondaryBanner = () => {
  return (
    <div className="text-cardTextColor flex justify-center secondary-banner mb-titleMargin">
      <NavLink className="rounded-lg border-2 border-transparent" to="/phone">
          <div className="w-32 h-28">
            <img
              className="w-24 h-16 md:w-32 md:h-24 border-2 border-gray-500 rounded-lg hover:border-4 active:border-black"
              src={phone}
              alt=""
            />
        </div>
        <p className="mt-1 text-center font-bold">Phone</p>
      </NavLink>
      <NavLink className="rounded-lg border-2 border-transparent" to="/laptop">
      <div className="w-32 h-28">
            <img
              className="w-24 h-16 md:w-32 md:h-24 border-2 border-gray-500 rounded-lg hover:border-4 active:border-black"
              src={laptop}
              alt=""
            />
        </div>
        <p className="mt-1 text-center font-bold">Laptop</p>
      </NavLink>
      <NavLink
        className="rounded-lg border-2 border-transparent"
        to="/tv"
      >
          <div className="w-32 h-28">
            <img
              className="w-24 h-16 md:w-32 md:h-24 border-2 border-gray-500 rounded-lg hover:border-4 active:border-black"
              src={tv}
              alt=""
            />
        </div>
        <p className="mt-1 text-center font-bold">TV & Monitor</p>
      </NavLink>
      <NavLink
        className="rounded-lg border-2 border-transparent"
        to="/ac"
      >
          <div className="w-32 h-28">
            <img
              className="w-24 h-16 md:w-32 md:h-24 border-2 border-gray-500 rounded-lg hover:border-4 active:border-black"
              src={ac}
              alt=""
            />
        </div>
        <p className="mt-1 text-center font-bold">AC</p>
      </NavLink>
      <NavLink
        className="rounded-lg border-2 border-transparent"
        to="/kitchen"
      >
          <div className="w-32 h-28">
            <img
              className="w-24 h-16 md:w-32 md:h-24 border-2 border-gray-500 rounded-lg hover:border-4 active:border-black"
              src={kitchen}
              alt=""
            />
        </div>
        <p className="mt-1 text-center font-bold">Kitchen Gadet</p>
      </NavLink>
      <NavLink
        className="rounded-lg border-2 border-transparent"
        to="/refrigerator"
      >
          <div className="w-32 h-28">
            <img
              className="w-24 h-16 md:w-32 md:h-24 border-2 border-gray-500 rounded-lg hover:border-4 active:border-black"
              src={refrigerator}
              alt=""
            />
        </div>
        <p className="mt-1 text-center font-bold">Refrigerator</p>
      </NavLink>
    </div>
  );
};

export default SecondaryBanner;
