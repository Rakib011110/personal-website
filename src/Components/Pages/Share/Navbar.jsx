import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full  h-[96px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto flex justify-between items-center px-5">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer   w-[55px] h-[55px] flex items-center justify-center"
          >
            <BiHomeAlt className="text-white text-2xl" />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer   w-[55px] h-[55px] flex items-center justify-center"
          >
            <BiUser className="text-white text-2xl" />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer  w-[55px] h-[55px] flex items-center justify-center"
          >
            <BsClipboardData className="text-white text-2xl" />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer  w-[55px] h-[55px] flex items-center justify-center"
          >
            <BsBriefcase className="text-white text-2xl" />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer  w-[55px] h-[55px] flex items-center justify-center"
          >
            <BsChatSquare className="text-white text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
