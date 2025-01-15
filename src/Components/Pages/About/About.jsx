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
    <div className="mt-52  ">
      {/* <TextComponent>
        {" "}
        <h1 className="text-center w-72 border-gray-400 border-b-4  mx-auto">
          {" "}
          ABOUT ME{" "}
        </h1>{" "}
      </TextComponent> */}

      <section
        className="section container  mx-auto rounded-md border border-t-0 shadow-2xl p-10"
        id="about"
        ref={ref}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-y-10  lg:items-center lg:gap-x-20 lg:gap-y-0">
            {/* img */}

            <div
              className="bg-animation "
              style={{
                backgroundImage: "url('https://i.ibb.co/YfS1rbj/brush.png')", // Replace 'path_to_your_image' with the actual path to your image
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "100%",

                margin: "auto",
              }}>
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                animate="show"
                className="lg:flex flex-1 w-full">
                <img className="rounded-full" src={Image} alt="" />
              </motion.div>
            </div>

            {/* text */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.3 }}>
              <div className="flex-1 text-white backdrop-blur-lg">
                <h2 className="h2 text-white"></h2>
                {/* <h3 className="h3 mb-4 font-serif text-white">
                  I'm a Front-end Developer with over 2 years of exprience.
                </h3> */}
                {/* <p className="mb-6 font-serif text-white">
                  As a web developer experienced in , JavaScript, my goal is to
                  build captivating websites and applications. <br /> I am eager
                  to learn and collaborate with a talented team to create user-
                  friendly web solutions. <br />
                  By writing clean code and problem- solving effectively,
                  <br />I aim to contribute to organizational success <br />{" "}
                  while advancing my career in web development.
                </p> */}

                <p class=" text-sm md:text-base font-serif mb-6 font-sans">
                  <span className="text-4xl mb-4  font-sans font-bold">
                    {" "}
                    ABOUT ME{" "}
                  </span>
                  <br /> <br />
                  Hi, I am Rakibul Islam. I am a passionate and dedicated
                  Full-Stack Web Developer with expertise in modern web <br />
                  technologies like React, Next.js, Node.js, TypeScript,
                  <br /> and Prisma. I specialize in creating scalable,
                  responsive, and user-friendly applications that solve <br />
                  real-world problems. My technical expertise includes frontend
                  and backend development, API integrations, and database
                  <br />
                  management. Feel free to contact me for collaboration or
                  innovative projects.
                </p>
              </div>
              {/* stats */}
              <div className="">
                <AboutText></AboutText>
                {/* 
                <div className="flex  mb-6 justify-center">
                  <div className="text-[40px]  text-white font-tertiary text-gradient mb-2">
                    <CountUp start={0} end={15} duration={3} />+
                  </div>
                  <div className="font-primary flex-wrap text-sm tracking-[2px] text-white">
                    Satisfied Clients
                  </div>
                </div> */}
              </div>
              {/* <div className="flex gap-x-8 items-center">
                <button className="btn ">Contact me</button>
                <a href="#" className="text-gradient btn-link">
                  My Portfolio
                </a>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
