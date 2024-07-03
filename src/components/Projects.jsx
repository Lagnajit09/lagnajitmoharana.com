function Projects() {
  const projects = [
    {
      title: "Virtual study platform",
      link: "https://studybuddy-52816.web.app/",
      tech: "React.js, Node.js, Express.js, MongoDB, Firebase",
    },
    {
      title: "Blog Website",
      link: "https://medium-pro.web.app/",
      tech: "React.js, Hono, PostgreSQL, Firebase, Tailwind CSS, Prisma ORM",
    },
    {
      title: "Social Media Platform",
      link: "https://ls-book.web.app/",
      tech: "React.js, Firebase",
    },
  ];

  return (
    <section className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded shadow-sm">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-1">{project.tech}</p>
              <a
                href={project.link}
                className="text-blue-500 mt-2 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
