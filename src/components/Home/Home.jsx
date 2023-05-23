import React from "react";

import "./Home.css";
import ParticleBackground from "../ParticlesBackground/ParticlesBackground";
import homeImg from "../../assets/home-main.svg";
import Type from "./Type";
import About from "../About/About";
import Proyects from "../Proyects/Proyects";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <ParticleBackground />
        <div className="home-container">
          <div className="home-card flex flex-col md:flex-row  gap-10 justify-center items-center pt-10 my-10 ">
            <div className="text-[#fff] home-content w-4/5 pl-5 my-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bold">
                Hi There! <span className="wave">👋🏻</span>
              </h1>
              <p className="text-[50px] uppercase font-[900] ">
                I'm <span className="text-[#c770f0] "> Axel Cadona </span>
              </p>
              <span className="text-[15px] uppercase font-[900]  ">
                <Type />
              </span>
            </div>
            <div className="">
              <img src={homeImg} alt="" width={500} className="home-img" />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Proyects />
      <Contact />
    </>
  );
};

export default Home;
