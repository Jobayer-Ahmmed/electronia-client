import { NavLink, useNavigate } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import { Context } from "../context/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCartData from "../hooks/useCartData/useCartData";
import { getLocalstorageData } from "../localstorage/localstorage";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const { newUser, logOut } = useContext(Context);
  const navigate = useNavigate();
  const cartDB = useCartData();
  const cartLocal = getLocalstorageData();
  const email = newUser?.email;

  const handleLogout = () => {
    logOut().then(() => navigate("/"));
  };

  const navlinks = (
    <>
      <li className="text-textColor">
        <NavLink to="/">Home</NavLink>
      </li>
      {!email && (
        <li className="text-textColor">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {!email && (
        <li className="text-textColor">
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="relative text-textColor lg:px-20 px-[10%] flex items-center justify-between  w-full h-16  z-50 ">
      <div className=" flex items-center gap-5">
        <div className="block lg:hidden">
          {toggle ? (
            <button onClick={() => setToggle(!toggle)} className="">
              <ImMenu className="text-2xl" />
            </button>
          ) : (
            <button onClick={() => setToggle(!toggle)} className="">
              <ImCross className="text-2xl" />
            </button>
          )}
        </div>
        <span className="logo text-4xl font-bold">
         electronia
        </span>
      </div>
      <div>
        <ul
          className={`myNavItem bg-cardColor z-10 absolute top-[70px] lg:hidden  flex flex-col gap-3 rounded text-center p-5 font-medium ${
            toggle ? " -left-72 transition-[1] " : "left-2  transition-[1]"
          }`}
          style={{
            background: "rgba(245,209,131,1)",
          }}
        >
          {navlinks}
        </ul>
        <div className=" flex items-center  py-5 relative ">
          <div className="w-full flex justify-between">
            <div className="rounded text-lg hidden lg:block font-medium text-center text-white ">
              <ul className="myNavItem2 flex justify-center gap-10">
                {navlinks}
              </ul>
            </div>
            <div className="ml-0 lg:ml-16">
              <TiShoppingCart
                onClick={() => navigate("/cart")}
                className="text-4xl cursor-pointer"
              />
            </div>
            <div className="w-8 h-6 rounded-full bg-red-700 flex justify-center items-center -ml-4 -mt-2">
              <p className="text-white flex justify-center ">
                <small>{email ? cartDB?.length : cartLocal?.length}</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {newUser?.displayName ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <img
              className="btn btn-circle w-12 h-12 rounded-full"
              src={newUser?.photoURL}
              alt=""
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] text-lg menu py-4 pl-10 shadow bg-base-100 rounded-box w-52"
          >
            <li>{newUser.displayName}</li>
            <li onClick={handleLogout} className="cursor-pointer mt-3">
              Log Out
            </li>
          </ul>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Navbar;
