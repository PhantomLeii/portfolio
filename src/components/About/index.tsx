import { education } from "@/data";

import Technologies from "./Technologies";
import MyEducation from "./Education";

import { RiArrowRightDownLine } from "react-icons/ri";

const About = ({ aboutDesc }: { aboutDesc: string }) => {
  return (
    <section
      id="about"
      className="w-full py-6 flex justify-center items-center mb-16"
    >
      <div className="wrapper w-full flex flex-col justify-center items-center gap-16">
        <h1 className="w-full text-center">
          About <span className="text-teal">Me</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mb-16">
          <div className="w-full bg-noir">
            <img src="/b5.svg" alt="coding" className="w-full h-full" />
          </div>
          <div className="w-full text-center sm:text-start flex flex-col items-start justify-start gap-4 sm:gap-8">
            <p>{aboutDesc}</p>
            <a
              href="#education"
              className="border-2 border-teal py-2 px-5 w-full sm:w-fit font-bold bg-teal transition-all duration-300 hover:bg-transparent hover:border-noir "
            >
              <div className="w-full h-full flex items-center justify-center gap-2">
                <span className="text-ivory transition-all duration-300 hover:text-noir">
                  My Education
                </span>
                <RiArrowRightDownLine style={{ fontSize: "22px" }} />
              </div>
            </a>
          </div>
        </div>
        <Technologies />
        <MyEducation educationData={education} />
      </div>
    </section>
  );
};

export default About;
