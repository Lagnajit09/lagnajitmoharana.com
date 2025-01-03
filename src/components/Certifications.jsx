import React from "react";
import { certificates } from "../constants/certificates";
import { Link } from "react-router-dom";

const Certifications = () => {
  return (
    <section id="section" className=" pt-5">
      <div className="container mx-auto">
        <h2 className="text-gray-300 text-2xl font-bold">Certifications</h2>
        {certificates.map((cert, index) => (
          <div
            className={`flex mt-2 gap-3 items-center text-gray-400 p-3 rounded hover:text-gray-300`}
            key={index}
          >
            <div className="bg-gray-800 h-fit rounded-full p-2">
              <img src={cert.logo} alt="AWS_Logo" className="w-6 h-6" />
            </div>
            <div className={`flex flex-col bg-transparent`}>
              <a
                className="font-semibold hover:underline"
                href={cert.verifyLink}
                target="_blank"
              >
                {cert.name}
              </a>
              <p className="text-sm">{cert.company}</p>
              <p className="text-sm">
                {cert.issuedDate} - {cert.expiredDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
