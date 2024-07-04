import { RiShareBoxLine } from "react-icons/ri";

function Projects() {
  const projects = [
    {
      title: "StudyBuddy: Virtual study platform",
      link: "https://studybuddy-52816.web.app/",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
      description:
        "Virtual Study Buddy is an innovative online platform aimed at fostering a collaborative studying environment. It integrates AI-powered study resources from renowned educational platforms, real-time note-taking capabilities, and various chat options, ensuring students have everything they need to succeed.",
    },
    {
      title: "Medium: Blog Website",
      link: "https://medium-pro.web.app/",
      tech: [
        "React.js",
        "Hono",
        "PostgreSQL",
        "Firebase",
        "Tailwind CSS",
        "Prisma ORM",
      ],
      description:
        "Medium is an advanced and feature-rich blogging platform designed to enhance your writing and reading experience.",
    },
    {
      title: "Social Media Platform",
      link: "https://ls-book.web.app/",
      tech: ["React.js", "Firebase"],
      description:
        "A frontend template for a social media application similar to Instagram. Users can post and comment on content, and view their profiles. This template provides the basic structure and functionality for a social media experience focused on user interactions and content sharing.",
    },
  ];

  return (
    <section className="py-4" id="projects">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-300">Projects</h2>
        <div className="w-full flex gap-4 mt-2 p-3 flex-wrap">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" border border-gray-500 p-4 rounded shadow-sm flex flex-col justify-around gap-2"
              style={{ backgroundColor: "#11214a" }}
            >
              <h3 className="text-xl font-bold text-gray-300">
                {project.title}
              </h3>
              <p className=" text-sm text-gray-400">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((item, index) => (
                  <p
                    className="mt-1 text-gray-300 text-xs rounded-full px-2 py-1 border-2 border-blue-900"
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-500 mt-2 text-sm flex gap-2 items-center"
              >
                <span>View Project</span>
                <RiShareBoxLine />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
