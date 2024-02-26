import { Outlet } from "react-router-dom";
import SecondaryBanner from "./secondaryBanner/SecondaryBanner";


const SecondaryHome = () => {
  return (
    <div>
      <SecondaryBanner/>
      <Outlet/>
    </div>
  );
};

export default SecondaryHome;
