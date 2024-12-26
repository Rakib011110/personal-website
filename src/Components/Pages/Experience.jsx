import React from "react";

import html from "../../assets/skill/html.png";
import css from "../../assets/skill/css.png";
import javascript from "../../assets/skill/javascript.png";
import reactImage from "../../assets/skill/react.png";
import nextjs from "../../assets/skill/nextjs.png";
import tailwind from "../../assets/skill/tailwind.png";
import MongoDb from "../../assets/skill/mongoDb.png";
import TS from "../../assets/skill/typescript.png";
import prisma from "../../assets/skill/prisma-4.svg";
import github from "../../assets/skill/github.png";
import redux from "../../assets/skill/Redux.png";
import graphql from "../../assets/skill/graphql.png";
import { motion } from "framer-motion";
import TextComponent from "../../Common/Title";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-700",
      hover: "",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },

    {
      id: 6,
      src: MongoDb,
      title: "MongoDb",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: TS,
      title: "typescript",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: prisma,
      title: "Prisma",
      style: "text-white bg-white  shadow-blue-200 border-black shadow-lg",
    },

    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400 shadow-lg",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400 shadow-lg",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: " bg-white shadow-purple-400  shadow-lg",
    },
  ];

  return (
    //   className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"

    <motion.div
      className=""
      initial="hidden"
      whileInView="visible"
      viewPort={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}>
      <div className=" items-center  mt-64 justify-center ">
        <div name="experience" className="">
          <div className=" max-w-screen-2xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div className="text-center">
              <TextComponent>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                  EXPRERIENCE
                </p>
              </TextComponent>
              <p className="py-6 font-bold text-cyan-200 ">
                These are the technologies I've worked with
              </p>
            </div>

            <div className="w-full  grid border grid-cols-2 my-5  sm:grid-cols-4 gap-8 text-center  py-8 px-12 sm:px-5">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md border  rounded-full hover:scale-50 p-24  duration-1000 py-2 rounded- ${style}`}>
                  {/* <img src={src} alt="" className="w-20 mx-auto" /> */}
                  <p className="mt-4"></p>

                  <div className="flex    items-center justify-center ">
                    <div>
                      <div className="">
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                          <div className="">
                            <img src={src} alt="" className=" " />
                          </div>
                          <div className="absolute inset-0  from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                          <div className="absolute inset-0 flex translate-y-[90%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                              {title}
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
                          </div>
                        </div>

                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------- */}

        {/* --------------- */}
      </div>
      <div>
        {/* <div className="fixed bottom-16  hidden  lg:flex flex-col top-[90%] left-[30%]  ">
          <div>
            <p className="font-com text-2xl  text-center font-semibold text-white">
              All Images are from{" "}
              <a href="" className="text-blue-500">
             
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
