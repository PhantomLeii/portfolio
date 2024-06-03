const Technologies = () => {
  return (
    <div className="w-full text-center flex flex-col justify-center items-center gap-10 py-6 mb-16">
      <h2 className="tracking-wide">Technologies</h2>
      <div className="w-full flex flex-wrap justify-evenly items-center">
        <span>
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
            alt="Django"
          />
        </span>
        <span>
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
          />
        </span>
        <span>
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Node.js"
          />
        </span>
        <span>
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            alt="MySQL"
          />
        </span>
        <span>
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="TailwindCss"
          />
        </span>
        <span>
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
            alt="TypeScript"
          />
        </span>
        <span>
          <img
            className="w-24 h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg"
            alt="TypeScript"
          />
        </span>
      </div>
    </div>
  );
};

export default Technologies;
