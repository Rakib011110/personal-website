import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/My project (1).png";
const BannerImg = ({ Image }) => {
  return (
    <div
      className="bg-animation"
      style={{
        borderRadius: "100%",
        width: "420px",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="bg-animation-gradient"
        style={{
          background: "linear-gradient(to right, #7a49a8, #61a4bc)",
          width: "100%",
          height: "100%",
          animation: "bgAnimation 10s linear infinite",
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: "50%" },
            show: { opacity: 1, y: "0%" },
          }}
          initial="hidden"
          animate="show"
          className="lg:flex flex-1 w-full"
        >
          <img className="rounded-full" src={Image} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BannerImg;
