import React from "react";
// images
import Image from "../../../assets/IMG_20230523_122645_Bokeh_3-removebg.png";
// import icons
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../../variants";
import Button from "../../../Common/Button";
import Title from "../../../Common/Title";
import TextComponent from "../../../Common/Title";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] container mx-auto  flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[42px] font-bold leading-[0.8] lg:text-[72px]"
            >
              RAKIBUL <span>ISLAM</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px]  font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TextComponent>
                <TypeAnimation
                  sequence={[
                    "DEVELOPER",
                    2000,
                    "FRONT END DEV",
                    2000,
                    "MEARN STACK DEV",
                    2000,

                    "WEB DESIGNER",
                    2000,
                  ]}
                  speed={50}
                  className="text-accent  "
                  wrapper="span"
                  repeat={Infinity}
                />
              </TextComponent>
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint comm
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-10 mx-auto lg:mx-0"
            >
              {/* <button
                className="btn btn-lg"
                style={{
                  background: "linear-gradient(to right, #5c258d, #4389a2)",
                }}
              >
                Click me
              </button> */}

              <button className="btn text-white">Contact me</button>
              {/* <a href="#" className="text-gradient btn-link">
                My portfolio
              </a> */}

              <div>
                <Link
                  to="work"
                  smooth
                  duration={500}
                  className="group text-white btn"
                >
                  PORTFOLIO
                  <span className="group-hover:rotate-90 duration-300">
                    <FaArrowAltCircleRight size={25} className="ml-1" />
                  </span>
                </Link>
              </div>
            </motion.div>
            {/* social links */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#" className="btn">
                <FaYoutube className="text-3xl text-white " />
              </a>
              <a className="btn" href="#">
                <FaGithub className="text-3xl text-white " />
              </a>
              <a className="btn" href="#">
                <FaDribbble className="text-3xl text-white " />
              </a>
            </motion.div>
          </div>

          {/* images */}
          <div
            style={{
              background: "linear-gradient(to right, #7a49a8, #61a4bc)",
              borderRadius: "50%",
            }}
          >
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="hidden lg:flex  flex-1 max-w-[320px] lg:max-w-[682px] w-[620px] "
            >
              <img className="rounded-full" src={Image} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
