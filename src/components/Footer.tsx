import { NavLink } from "@/data/interfaces";
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = ({ navLinks }: { navLinks: NavLink[] }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-sage text-noir flex flex-col justify-center items-center w-full">
      <div className="wrapper w-full grid grid-cols-1 md:grid-cols-3">
        <div className="h-full flex flex-col justify-center items-start">
          <a href="/" id="logo">
            Phoshoko<span>.</span>
          </a>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <h4 className="pb-1 border-b border-teal text-start">Content</h4>
          <nav className="flex flex-col justify-start items-start">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="transition duration-300 hover:underline-offset-1 hover:underline"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <h4 className="pb-1 border-b border-teal text-start">Connect</h4>
          <nav className="flex flex-col justify-start items-start">
            <a href="https://x.com/onlyphantomleii/">
              <div className="flex justify-center items-center gap-2">
                <span>
                  <FaXTwitter />
                </span>
                <span className="transition-all duration-300 hover:underline">
                  Twitter
                </span>
              </div>
            </a>
            <a href="https://linkedin.com/in/phoshoko-ml">
              <div className="flex justify-center items-center gap-2">
                <span>
                  <FaLinkedin />
                </span>
                <span className="transition-all duration-300 hover:underline">
                  LinkedIn
                </span>
              </div>
            </a>
            <a href="https://discordapp.com/users/1108815801873617007">
              <div className="flex justify-center items-center gap-2">
                <span>
                  <FaDiscord />
                </span>
                <span className="transition-all duration-300 hover:underline">
                  Discord
                </span>
              </div>
            </a>
            <a href="https://github.com/Phantomleii/">
              <div className="flex justify-center items-center gap-2">
                <span>
                  <FaGithub />
                </span>
                <span className="transition-all duration-300 hover:underline">
                  GitHub
                </span>
              </div>
            </a>
          </nav>
        </div>
        <div className="w-full col-span-1 md:col-span-3 mt-4 border-t border-neutral-400 py-2">
          <p className="text-center text-sm">
            Copyright &copy; {currentYear} Phoshoko ML
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
