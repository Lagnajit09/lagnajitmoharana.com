import React from "react";
import { experiences } from "../constants/experiences";

const Experience = () => {
  const mouseOver = (item) => {
    document.querySelector(`.${item}`).style.backgroundColor = "#11214a";
  };
  const mouseLeave = (item) => {
    document.querySelector(`.${item}`).style.backgroundColor = "#0b152f";
  };

  return (
    <section id="section" className=" pt-5">
      <div className="container mx-auto">
        <h2 className="text-gray-300 text-2xl font-bold">Experience</h2>

        {experiences.map((exp, index) => (
          <div
            className={`exp-${index} flex mt-2 gap-3 items-center text-gray-400 p-3 rounded hover:text-gray-300`}
            onMouseOver={() => mouseOver(`exp-${index}`)}
            onMouseLeave={() => mouseLeave(`exp-${index}`)}
            key={index}
          >
            <div className="bg-gray-100 h-fit rounded-full p-2">
              <img src={exp.logo} alt="Accenture_logo" className="w-6 h-6" />
            </div>
            <div className={`exp-${index} flex flex-col bg-transparent`}>
              <h3 className="font-semibold">{exp.designation}</h3>
              <p className="text-sm">{exp.company}</p>
              <p className="text-sm">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
