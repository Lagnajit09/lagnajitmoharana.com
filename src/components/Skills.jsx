import { FaReact, FaNodeJs, FaDatabase, FaCloud } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiPhp,
} from "react-icons/si";

function Skills() {
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold">Technical Skills</h2>
        <div className="flex flex-wrap mt-2 space-x-4">
          <FaReact title="React.js" />
          <SiNextdotjs title="Next.js" />
          <FaNodeJs title="Node.js" />
          <SiTailwindcss title="Tailwind CSS" />
          <SiMongodb title="MongoDB" />
          <SiPostgresql title="PostgreSQL" />
          <SiFirebase title="Firebase" />
          <SiJavascript title="JavaScript" />
          <SiTypescript title="TypeScript" />
          <SiPhp title="PHP" />
          <FaDatabase title="Database Management" />
          <FaCloud title="Cloud Computing" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
