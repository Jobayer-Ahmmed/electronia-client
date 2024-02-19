import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayouts = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(6,100,101,0.9332983193277311) 0%, rgba(245,209,131,1) 100%)",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
