import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="w-full text-center flex flex-col justify-center items-center gap-10 py-6 mb-16">
      <motion.h2
        className="tracking-wide"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Technologies
      </motion.h2>
      <div className="w-full flex flex-wrap justify-evenly items-center">
        {[
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
        ].map((src, index) => (
          <motion.span
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img className="w-24 h-24" src={src} alt="Technology" />
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
