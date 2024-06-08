import { motion } from "framer-motion";
import { Education } from "@/data/interfaces";

const MyEducation = ({ educationData }: { educationData: Education[] }) => {
  return (
    <div
      id="education"
      className="w-full py-6 flex flex-col justify-center items-center gap-16 overflow-x-hidden"
    >
      <motion.h2
        className="text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.58 }}
      >
        Education
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-12">
        {educationData.map((item, i) => (
          <>
            <div key={i} className="w-full pb-2 mb-2 border-b border-teal">
              <motion.h1
                className="text-center sm:text-start w-full"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.58, delay: 0.2 }}
              >
                {item.year}
              </motion.h1>
            </div>
            <motion.div
              className="w-full flex flex-col justify-start items-start gap-2 sm:gap-4 mb-16 sm:mb-0"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.58, delay: 0.4 }}
            >
              <div className="pb-2 border-b-2 border-teal">
                <h1 className="text-center sm:text-start">{item.study}</h1>
                <h3 className="text-sm text uppercase mt-2 text-center sm:text-start">
                  {item.institution}
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
  );
};

export default MyEducation;
