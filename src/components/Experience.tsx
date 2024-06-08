import { motion } from "framer-motion";
import { Experience } from "@/data/interfaces";

const MyExperience = ({ experienceData }: { experienceData: Experience[] }) => {
  return (
    <section
      id="experience"
      className="w-full flex justify-center items-center py-6 mt-16 overflow-x-hidden"
    >
      <div className="wrapper w-full flex flex-col justify-center items-center gap-16">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.58 }}
        >
          Experience
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-12">
          {experienceData.map((item, i) => (
            <>
              <motion.div
                key={i}
                className="w-full pb-2 mb-2 border-b border-teal"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.58, delay: 0.2 }}
              >
                <h1 className="text-center sm:text-start w-full">
                  {item.year}
                </h1>
              </motion.div>
              <motion.div
                className="w-full flex flex-col justify-start items-start gap-2 sm:gap-4 mb-16 sm:mb-0"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.58, delay: 0.4 }}
              >
                <div className="pb-2 border-b-2 border-teal">
                  <h1 className="text-center sm:text-start">{item.position}</h1>
                  <h3 className="text-sm text uppercase mt-2 text-center sm:text-start">
                    {item.company}
                  </h3>
                </div>
                <p className="text-center sm:text-start text-balance">
                  {item.desc}
                </p>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
