import { Project } from "@/data/interfaces";

const Projetcs = ({ projectData }: { projectData: Project[] }) => {
  return (
    <section
      id="projects"
      className="w-full py-6 flex justify-center items-center"
    >
      <div className="wrapper flex flex-col justify-center items-center gap-16 w-full">
        <h1 className="w-full text-center">
          My <span className="text-teal">Projects</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {projectData.map((item, i) => (
            <div
              key={i}
              className="projectCard bg-pine shadow-md shadow-[rgba(0,0,0,0.6)] p-4 w-full max-w-[370px] rounded-xl transition-all duration-300 hover:-translate-y-2 z-10"
            >
              <div className="h-1/2 mb-2">
                <img
                  src={item.image}
                  alt="site-landing"
                  className="w-full h-full rounded-xl"
                />
              </div>
              <div className="w-full">
                <h4 className="uppercase sm:text-xl text-center sm:text-start text-ivory font-extrabold pb-1 border-b-2 border-ivory tracking-widest">
                  {item.title}
                </h4>
                <p className="text-ivory text-center sm:text-start my-2">
                  {item.desc}
                </p>
              </div>
              <div className="flex justify-start items-center gap-1 w-full ">
                {item.techStack.map((icon, j) => (
                  <span
                    key={j}
                    className="p-2 border-2 border-ivory rounded-lg bg-ivory shadow-md"
                  >
                    <img
                      src={icon.url}
                      alt={icon.alt}
                      className={icon.imageClassName}
                    />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetcs;
