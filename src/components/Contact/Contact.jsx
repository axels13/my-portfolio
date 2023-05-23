import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section className="contact text-white py-10" id="contact">
      <div className="flex flex-col items-center pb-5">
        <h4 className="text-[30px]">Contact</h4>
        <h2 className="text-2xl mx-5 font-[600] uppercase">
          Click here <span className="text-[#c770f0] ">below</span> 👇
        </h2>
      </div>
      <div className="flex items-center  flex-col sm:flex-row  gap-10 justify-center mt-5 ">
        <div className="">
          <div>
            <p>Location</p>

            <span>Mar del plata, Argentina</span>
          </div>
          <div className="mt-5 mx-20">
            <i class="ri-map-pin-line border-icon"></i>
          </div>
        </div>

        <div>
          {" "}
          <Link to="mailto:axel_cadona@hotmail.com ">
            <div>
              {" "}
              <p>Email</p> <span>axel_cadona@hotmail.com</span>
            </div>
          </Link>
          <div className="mt-5 mx-20">
            <i class="ri-mail-line border-icon "></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
