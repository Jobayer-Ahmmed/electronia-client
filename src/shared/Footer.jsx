import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../assets/logo/logo.png"

const Footer = () => {
  return (
    <footer className="bg-base-300  px-5 md:px-20 lg:px-40 py-20 ">
      <div className="flex justify-center mb-20">
              {/* logo */}
              <div className="flex items-center justify-center">
          <img className="w-12" src={logo} alt="" />
        <span className="logo text-2xl font-bold">electronia</span>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:gap-40 lg:gap-96">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Connect with Us</h2>
          <div className="flex justify-center gap-4 mt-4">
            <Link to={"https://www.facebook.com/"}>
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link to={"https://twitter.com/"}>
              <FaTwitter className="text-2xl" />
            </Link>
            <Link to={"https://www.instagram.com/"}>
              <FaInstagramSquare className="text-2xl" />
            </Link>
            <Link to={"https://www.youtube.com"}>
              <FaYoutube className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="text-center mt-6 md:mt-0">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="mt-2">Dhamrai, Dhaka 1350, Bangladesh</p>
          <p>+880 1xxxxxxxx</p>
          <p>info@electronia.com</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 electronia.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
