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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderNav></HeaderNav>
      <SocialLinks></SocialLinks>

      <Navbar />
      <div className="content">
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
          <h1>Work Section</h1>
        </section>
        <section id="contact">{/* <Contact></Contact> */}</section>
      </div>
    </>
  );
}

export default App;
