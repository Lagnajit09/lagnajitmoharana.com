import { RiShareBoxLine } from "react-icons/ri";
import { topProjects } from "../constants/projects";

function Projects() {
  return (
    <section className="py-4" id="projects">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-300">Projects</h2>
        <div className="w-full flex gap-4 mt-2 p-3 flex-wrap">
          {topProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/80 border border-gray-700 p-4 rounded-xl shadow-sm flex flex-col justify-around gap-2"
            >
              <h3 className="text-xl font-bold text-gray-300">
                {project.title}
              </h3>
              <p className=" text-sm text-gray-400">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((item, index) => (
                  <p
                    className="mt-1 text-cyan-300 text-xs rounded-full px-2 py-1 border-2 border-blue-900"
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="w-fit text-cyan-400 mt-2 text-sm flex gap-2 items-center"
              >
                <span>View Project</span>
                <RiShareBoxLine />
              </a>
            </div>
          ))}
        </div>
        <a
          href="/projects"
          className="w-fit text-cyan-400 font-semibold hover:text-gray-200 mt-2 ml-3 text-sm flex gap-2 items-center"
        >
          <span>View all projects</span>
          <RiShareBoxLine />
        </a>
      </div>
    </section>
  );
}

export default Projects;
