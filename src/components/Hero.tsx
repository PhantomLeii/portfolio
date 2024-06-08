import { motion } from "framer-motion";
import { RiArrowRightDownLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-6 flex flex-col justify-center items-center h-[calc(100vh-80px)] overflow-x-hidden"
    >
      <div className="wrapper w-full text-center flex flex-col justify-center items-center ">
        <motion.p
          className="uppercase text-sm tracking-widest"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.58 }}
        >
          Dynamic web magic with reactjs
        </motion.p>
        <motion.h1
          className="max-w-4xl text-3xl sm:text-4xl md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Crafting seamless user experiences
          <br />
          <span className="text-teal">one line of code at a time</span>
        </motion.h1>
        <motion.p
          className="tracking-wide my-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.58, delay: 1 }}
        >
          Hi I&apos;m Lebogang. A passionate full stack developer based in South
          Africa
        </motion.p>
        <motion.a
          href="#projects"
          className="btn"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.58, delay: 1.5 }}
        >
          <div>
            <span>See My Work</span>
            <RiArrowRightDownLine style={{ fontSize: "22px" }} />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
