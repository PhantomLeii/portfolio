import { useState } from "react";
import { NavLink } from "@/data/interfaces";
import { FaX } from "react-icons/fa6";
import { RiMenuLine } from "react-icons/ri";

const Navbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [menuState, setMenuState] = useState(false);

  const handleClick = () => {
    setMenuState(!menuState);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-ivory shadow-lg py-6 flex justify-center items-center z-50">
      <div className="wrapper w-full flex justify-between items-center">
        <a id="logo" href="/">
          Phoshoko<span className="text-teal">.</span>
        </a>
        <nav
          id="desktopMenu"
          className="hidden sm:flex items-center justify-center gap-4"
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="capitalize pb-1 border-b-2 border-transparent hover:border-teal font-medium transition-all duration-300 hover:text-teal"
            >
              {link.title}
            </a>
          ))}
        </nav>
        <div
          id="menuToggler"
          className="sm:hidden block text-2xl text-noir"
          onClick={handleClick}
        >
          {menuState ? <FaX /> : <RiMenuLine />}
        </div>
        <nav
          id="mobileMenu"
          className={`${
            menuState ? "active" : ""
          } absolute top-0 h-screen bg-ivory w-[60%] max-w-[300px] z-50 shadow-lg px-6 mt-20 flex flex-col justify-start items-start gap-1`}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="capitalize pb-1 border-b-2 border-transparent hover:border-teal font-medium transition-all duration-300 hover:text-teal"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
