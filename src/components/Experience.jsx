import React from 'react'
import AccentureLogo from "../assets/experiences/accenture_logo.svg";

const Experience = () => {
    const mouseOver = (item) => {
        document.querySelector(`.${item}`).style.backgroundColor = "#11214a";
      };
      const mouseLeave = (item) => {
        document.querySelector(`.${item}`).style.backgroundColor = "#0b152f";
      };

  return (
    <section id='section' className=' pt-5'>
        <div className="container mx-auto">
            <h2 className="text-gray-300 text-2xl font-bold">Experience</h2>

            <div className="exp-first flex mt-2 gap-3 items-center text-gray-400 p-3 rounded hover:text-gray-300"
                onMouseOver={() => mouseOver("exp-first")}
                onMouseLeave={() => mouseLeave("exp-first")}>
                <div className="bg-gray-100 h-fit rounded-full p-2">
                    <img src={AccentureLogo} alt='Accenture_logo' className='w-6 h-6' />
                </div>
                <div className="exp-first flex flex-col bg-transparent"
                >
                    <h3 className='font-semibold'>Packaged App Development Associate</h3>
                    <p className='text-sm'>Accenture</p>
                    <p className='text-sm'>August 2024 - Present</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience

