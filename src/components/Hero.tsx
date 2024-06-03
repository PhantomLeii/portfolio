import { RiArrowRightDownLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-6 flex flex-col justify-center items-center h-[calc(100vh-80px)]"
    >
      <div className="wrapper w-full text-center flex flex-col justify-center items-center ">
        <p className="uppercase text-sm tracking-widest">
          Dynamic web magic with reactjs
        </p>
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-6xl">
          Crafting seamless user experiences
          <br />
          <span className="text-teal">one line of code at a time</span>
        </h1>
        <p className="tracking-wide my-4">
          Hi I&apos;m Lebogang. A passionate full stack developer based in South
          Africa
        </p>
        <a href="#projects" className="btn">
          <div>
            <span>See My Work</span>
            <RiArrowRightDownLine style={{ fontSize: "22px" }} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
