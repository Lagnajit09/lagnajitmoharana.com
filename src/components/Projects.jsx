import { RiShareBoxLine } from "react-icons/ri";

function Projects() {
  const projects = [
    {
      title: "Swiftpay: Payment Application",
      link: "https://swiftpay-red.vercel.app/",
      tech: ["NextJS", "ExpressJS", "PostgreSQL", "Tailwind CSS", "Prisma"],
      description:
        "SwiftPay is a payment application that allows users to send and receive money instantly, connect with friends, and manage their finances with ease. It is built with a modern tech stack and offers a seamless user experience.",
    },
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
                className="text-cyan-400 mt-2 text-sm flex gap-2 items-center"
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
