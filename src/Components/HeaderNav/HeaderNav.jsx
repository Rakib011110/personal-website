import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import TextComponent from "../../Common/Title";

const HeaderNav = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    // {
    //   id: 2,
    //   link: "about",
    // },
    // {
    //   id: 3,
    //   link: "portfolio",
    // },
    {
      id: 4,
      link: "experience",
    },
    // {
    //   id: 5,
    //   link: "contact",
    // },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center  h-20  text-white  ">
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize btn  font-medium via-white hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-blue-100 font-extrabold text-2xl mx-10">
          <TextComponent>
            {" "}
            RAKIBUL <span className="text-blue-500"> ISLAM</span>{" "}
          </TextComponent>
        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {" "}
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4   cursor-pointer capitalize text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderNav;
