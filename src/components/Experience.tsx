import { Experience } from "@/data/interfaces";

const MyExperience = ({ experienceData }: { experienceData: Experience[] }) => {
  return (
    <section
      id="experience"
      className="w-full flex justify-center items-center py-6 mt-16"
    >
      <div className="wrapper w-full flex flex-col justify-center items-center gap-16">
        <h1>Experience</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-12">
          {experienceData.map((item, i) => (
            <>
              <div key={i} className="w-full pb-2 mb-2 border-b border-teal">
                <h1 className="text-center sm:text-start w-full">
                  {item.year}
                </h1>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2 sm:gap-4 mb-16 sm:mb-0">
                <div className="pb-2 border-b-2 border-teal">
                  <h1 className="text-center sm:text-start">{item.position}</h1>
                  <h3 className="text-sm text uppercase mt-2 text-center sm:text-start">
                    {item.company}
                  </h3>
                </div>
                <p className="text-center sm:text-start text-balance">
                  {item.desc}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
