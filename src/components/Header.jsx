import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profile from "../assets/pfp.jpg";

function Header() {
  return (
    <header className=" text-white">
      <div className="container h-[100vh] m-auto flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold">Lagnajit Moharana</h1>
          <p>Fresher | Aspiring Full-Stack Developer</p>
          <div className="flex space-x-6 mt-2">
            <a
              href="https://github.com/Lagnajit09"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/lagnajit-moharana-509591232/"
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
              <FaTwitter className="w-7 h-7" />
            </a>
          </div>
          <button className="mt-4 w-fit bg-blue-500 text-white py-2 px-4 rounded hover:scale-105 transition-all ease-linear">
            Download Resume
          </button>
        </div>
        <div>
          <img
            src={profile}
            alt="Profile"
            className=" w-96 h-96 object-cover rounded-full shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
