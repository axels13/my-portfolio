import React from "react";
import proyect from "./proyect";
import "./Proyects.css";
import { Link } from "react-router-dom";
const Proyects = () => {
  return (
    <section className="container proyects " id="proyects">
      <h2 className="text-white font-[900] text-4xl ml-10 mb-10 text-center">
        My <span className="text-[#c770f0]">proyects</span>{" "}
      </h2>
      <div className="proyects-grid gap-5  mx-5 mt-10">
        {proyect.map((p) => (
          <Link key={p.id} className="links-item" to={p.to}>
            <img src={p.img} alt="" className="proyects-img" width={400} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Proyects;
