import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Image from "../../../assets/IMG_20230523_122645_Bokeh_3-removebg.png";
import AboutText from "../../../Common/AboutText";
import TextComponent from "../../../Common/Title";
import bgimg from "../../../assets/skill/brush.png";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const fadeIn = (direction, duration) => ({
    hidden: { opacity: 0, y: direction === "up" ? 100 : -100 },
    show: { opacity: 1, y: 0, transition: { duration } },
  });
  return (
    <div className="mt-64 ">
      <TextComponent>
        {" "}
        <h1 className="text-center border-b-4 border-gray-500 w-72 mx-auto">
          {" "}
          ABOUT ME{" "}
        </h1>{" "}
      </TextComponent>

      <section
        className="section container mx-auto  border p-10"
        id="about"
        ref={ref}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
            {/* img */}
            {/* <div
              className="bg-animation"
              style={{
                background: "linear-gradient(to right, #7a49a8, #61a4bc)",
                borderRadius: "100%",
                width: "420px",
                margin: "auto",
              }}
            >
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                animate="show"
                className="lg:flex flex-1 w-full"
              >
                <img className="rounded-full" src={Image} alt="" />
              </motion.div>
            </div> */}

            <div
              className="bg-animation"
              style={{
                backgroundImage: "url('https://i.ibb.co/YfS1rbj/brush.png')", // Replace 'path_to_your_image' with the actual path to your image
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "100%",
                width: "420px",
                margin: "auto",
              }}
            >
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                animate="show"
                className="lg:flex flex-1 w-full"
              >
                <img className="rounded-full" src={Image} alt="" />
              </motion.div>
            </div>

            {/* text */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex-1">
                <h2 className="h2 text-accent"></h2>
                <h3 className="h3 mb-4 font-serif">
                  I'm a Front-end Developer with over 2 years of exprience.
                </h3>
                <p className="mb-6 font-serif">
                  As a web developer experienced in , JavaScript, my goal is to
                  build captivating websites and applications. <br /> I am eager
                  to learn and collaborate with a talented team to create user-
                  friendly web solutions. <br />
                  By writing clean code and problem- solving effectively,
                  <br />I aim to contribute to organizational success <br />{" "}
                  while advancing my career in web development.
                </p>
              </div>
              {/* stats */}
              <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                <AboutText></AboutText>

                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    <CountUp start={0} end={13} duration={3} />
                    k+
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Satisfied <br />
                    Clients
                  </div>
                </div>
              </div>
              <div className="flex gap-x-8 items-center">
                <button className="btn ">Contact me</button>
                <a href="#" className="text-gradient btn-link">
                  My Portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
