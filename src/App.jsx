import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Pages/Share/Navbar";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact";
import Header from "./Components/Pages/Share/Header";
import Banner from "./Components/Pages/Share/Banner";
import Experience from "./Components/Pages/Experience";
import HeaderNav from "./Components/HeaderNav/HeaderNav";
import SocialLinks from "./Common/SocialLink";
import ParticlesBg from "particles-bg";
import Work from "./Components/Pages/Works/Work";
import Blog from "./Components/Blog/Blog";

function App() {
  const backgroundStyle = {
    backgroundColor: "#0000ff",
  };
  return (
    <>
      <div className="">
        <ParticlesBg
          className="mx-auto container"
          type="custom"
          bg={true}
          num={5}
        />

        {/* <AnimatedCursor type="rings" /> */}

        {/* Custom cursor with a custom image */}
        {/* <AnimatedCursor
        type="rings"
        innerSize={18}
        outerSize={30}
        color="255,0,0"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      /> */}

        {/* Predefined cursor types */}
        {/* <AnimatedCursor type="circle" /> */}

        <HeaderNav></HeaderNav>
        <SocialLinks></SocialLinks>
        <Navbar />

        <div className="content bg-[url('https://res.cloudinary.com/dqp2vi7h1/image/upload/v1736330920/33_lgmoyd.jpg')] ">
          <section id="home">
            <Banner></Banner>
          </section>

          <section id="about">
            <About></About>
          </section>
          <section id="services">
            <Experience></Experience>
          </section>
          <section id="work">
            <Work></Work>
          </section>
          <section id="blog">
            <Blog></Blog>
          </section>
          <section
            className=" bg-[url('https://res.cloudinary.com/dqp2vi7h1/image/upload/v1736330920/33_lgmoyd.jpg')]"
            id="contact">
            <Contact></Contact>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
