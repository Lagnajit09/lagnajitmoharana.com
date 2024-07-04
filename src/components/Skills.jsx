import { skillsList } from "../constants/skills";

function Skills() {
  return (
    <section className="pt-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-300">Technical Skills</h2>
        <div className="flex flex-wrap mt-2 ">
          {skillsList.map((item, index) => (
            <div
              key={index}
              className="p-2 mb-2 flex flex-col items-center gap-2 w-[20%]"
            >
              <img
                src={item.icon}
                alt="html"
                className=" w-16 h-16 object-contain"
              />
              <span className=" text-gray-400 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
