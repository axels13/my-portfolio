import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import images from "../../images";
const About = () => {
  return (
    <section className="container about" id="about">
      <div className="flex items-center flex-col md:flex-row justify-center gap-10">
        <div className="lg:pl-10 md:pl-5 sm:pl-5">
          <h2 className="text-white text-[50px] px-10">
            Know Who <span className="text-[#c770f0] ">I'm</span>
          </h2>

          <p className="text-white px-10 w-50 max-w-lg">
            A highly motivated Jr Front End Developer with a passion for web
            development with experience in HTML, CSS, JavaScript, React,
            Tailwind and Bootstrap. I am looking for an opportunity to apply my
            skills and learn more in a challenging work environment.
          </p>
        </div>
        <div className="mt-5">
          {" "}
          <img
            src={about}
            alt="img-about-banner"
            className="about-img"
            width={600}
          />
        </div>
      </div>

      <div className="about-skills-container mt-10 lg:pl-10  md:pl-5 sm:pl-0 text-center w-full">
        <h1 className="font-[600] text-white text-[50px] mb-5 ">
          Professional <span className="text-[#c770f0]"> Skillset</span>
        </h1>

        <div className="grid gap-10 items-center justify-center pl-10 mt-20 about-grid ">
          {Object.keys(images).map((nameimg) => (
            <div
              className="about-card-img flex items-center justify-center "
              key={nameimg.id}
            >
              <img
                src={images[nameimg]}
                key={nameimg}
                alt={nameimg}
                width={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
