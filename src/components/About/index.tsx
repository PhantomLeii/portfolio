import { motion } from "framer-motion";
import { education } from "@/data";

import Technologies from "./Technologies";
import MyEducation from "./Education";

import { RiArrowRightDownLine } from "react-icons/ri";

const About = ({ aboutDesc }: { aboutDesc: string }) => {
  return (
    <section
      id="about"
      className="w-full py-6 flex justify-center items-center mb-16 overflow-hidden"
    >
      <div className="wrapper w-full flex flex-col justify-center items-center gap-16">
        <motion.h1
          className="w-full text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.58 }}
        >
          About <span className="text-teal">Me</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-16">
          <motion.div
            className="w-full bg-noir rounded-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <img src="/b5.svg" alt="coding" className="w-full h-full" />
          </motion.div>
          <div className="w-full text-center sm:text-start flex flex-col items-start justify-start gap-4 sm:gap-8">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {aboutDesc}
            </motion.p>
            <motion.a
              href="#education"
              className="border-2 border-teal py-2 px-5 w-full sm:w-fit font-bold bg-teal transition-all duration-300 hover:bg-transparent hover:border-noir"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.58, delay: 0.8 }}
            >
              <div className="w-full h-full flex items-center justify-center gap-2">
                <span className="text-ivory transition-all duration-300 hover:text-noir">
                  My Education
                </span>
                <RiArrowRightDownLine style={{ fontSize: "22px" }} />
              </div>
            </motion.a>
          </div>
        </div>
        <Technologies />
        <MyEducation educationData={education} />
      </div>
    </section>
  );
};

export default About;
