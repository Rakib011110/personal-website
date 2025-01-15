import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "../../../assets/IMG_20230523_122645_Bokeh_3-removebg.png";
import AboutImg from "../../../assets/pngwing.com.png";
import AboutText from "../../../Common/AboutText";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const fadeIn = (direction, duration) => ({
    hidden: { opacity: 0, y: direction === "up" ? 100 : -100 },
    show: { opacity: 1, y: 0, transition: { duration } },
  });

  return (
    <div className="mt-24  px-6 lg:px-16">
      <section
        className="section container mx-auto border-t-0 shadow-none border-blue-700 rounded-md  border   shadow-2xl shadow-blue-800 p-10 "
        id="about"
        ref={ref}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
            {/* Image Section */}
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate="show"
              className="lg:w-1/2">
              <div
                className="bg-cover  bg-center md:w-80 lg:w-[700px]   mx-auto"
                style={{
                  backgroundImage: `url('https://i.ibb.co/YfS1rbj/brush.png')`,
                }}>
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={AboutImg}
                  alt="Rakibul Islam"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:w-1/2 text-white space-y-6">
              {/* <h1 className="text-4xl font-bold text-center lg:text-left">
                About Me
              </h1> */}
              <p className="text-sm md:text-base leading-relaxed">
                Hi, I am Rakibul Islam. I am a passionate and dedicated
                Full-Stack Web Developer with expertise in modern web
                technologies like React, Next.js, Node.js, TypeScript, and
                Prisma. I specialize in creating scalable, responsive, and
                user-friendly applications that solve real-world problems. My
                technical expertise includes frontend and backend development,
                API integrations, and database management. Feel free to contact
                me for collaboration or innovative projects.
              </p>

              {/* Tabs Section */}
              <AboutText />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
