import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profile from "../assets/pfp.jpg";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={profile} alt="Profile" className="w-16 h-16 rounded-full" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Lagnajit Moharana</h1>
          <p>Fresher | Aspiring Full-Stack Developer</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/Lagnajit09"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lagnajit-moharana-509591232/"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Download Resume
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
