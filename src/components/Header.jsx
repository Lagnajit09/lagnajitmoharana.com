import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profile from "../assets/pfp.jpg";
import { FaXTwitter } from "react-icons/fa6";

function Header() {
  const style = {
    spanStyle: {
      fontFamily: '"Playwrite VN", cursive',
      fontOpticalSizing: "auto",
      fontSize: "30px",
      fontWeight: "900",
    },
    firstHeadder: {
      fontFamily: '"Playwrite GB S", cursive',
      fontSize: "35px",
      fontWeight: "900",
    },
  };

  return (
    <header className=" text-white">
      <div className="container h-[100vh] m-auto flex flex-col justify-center gap-10 items-start">
        <div>
          <img
            src={profile}
            alt="Profile"
            className=" w-52 h-52 object-cover rounded-full shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h1 style={style.firstHeadder} className=" font-bold">
              Hey there 👋
            </h1>
            <h1 className="text-5xl font-bold">
              <span style={style.spanStyle}>I'm</span> Lagnajit Moharana
            </h1>
          </div>
          <div className="flex flex-col gap-1 text-gray-300">
            <p>ASE at Accenture | Full-Stack Developer</p>
            <p>
              Expertise in AWS Cloud and DevOps | Graduate in IT & Management
              2024
            </p>
          </div>
          <div className="flex space-x-6 mt-2">
            <a
              href="https://github.com/Lagnajit09"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/lagnajitmoharana2004/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="https://x.com/m_lagnajit09"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaXTwitter className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/sketchify99/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
          </div>
          <a
            href="https://github.com/Lagnajit09/lagnajitmoharana.com/raw/master/LagnajitMoharana.pdf"
            download
          >
            <button className="mt-4 w-fit bg-blue-500 text-white py-2 px-4 rounded hover:scale-105 transition-all ease-linear">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
