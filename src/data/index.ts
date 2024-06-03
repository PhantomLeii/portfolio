import { NavLink, Education, Project, Experience } from "./interfaces";

// Navbar
export const navLinks: NavLink[] = [
  { title: "Home", url: "#hero" },
  { title: "About", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Experience", url: "#experience" },
  { title: "Contact", url: "#contact" },
];

// About
export const aboutDesc: string = `I am a dedicated full stack developer currently pursuing a BSc in Mathematics & Computer Science with the University of South Africa. My technical toolkit includes proficiency in Node.js, Python, and MySQL, complemented by expertise in frameworks such as Next.js, Django, and React. I aim to leverage my skills to build robust solutions for businesses, with the ultimate goal of founding my own tech startup. Beyond coding, I enjoy gaming, staying active, and traveling, which provide a balanced and dynamic approach to my professional and personal life.`;

export const education: Education[] = [
  {
    year: "2024 - Present",
    study: "BSc Mathematics & Computer Science",
    institution: "University of South Africa",
    desc: `This educational journey is characterized by an in-depth exploration of fundamental concepts such as data structures and algorithms. Beyond the theoretical aspects, the program emphasizes the application of mathematical principles, including calculus, to solve complex problems. This multifaceted approach not only sharpens my analytical and problem-solving skills but also fosters a deeper appreciation for the intricacies of software development. Through this exposure to advanced computational techniques and the rigors of scientific writing, I am confident that this foundation will equip me with the critical tools needed to excel as a developer, blending technical prowess with a solid understanding of underlying principles.`,
  },
  {
    year: "2020 - 2023",
    study: "BSc Life & Environmental Science in Physiology & Psychology",
    institution: "University of Johannesburg",
    desc: `I pursued this course of study that included rigorous laboratory sessions, each requiring the completion of detailed lab reports. Despite not completing the program, this experience significantly shaped my approach to scientific writing and problem-solving. Engaging in these lab sessions honed my analytical skills and deepened my understanding of the scientific method, equipping me with the ability to approach complex problems systematically. This foundational training in structured thinking and clear communication will undoubtedly serve as a valuable asset in my career as a developer, enabling me to tackle challenges with precision and creativity.`,
  },
];

export const projects: Project[] = [
  {
    title: "Nebula Banking",
    desc: `Simple yet comprehensive banking web application that I developed using a blend of modern technologies. This project highlights my proficiency in full-stack development, featuring a robust backend.`,
    image: "/nebulaBanking.png",
    siteUrl: "https://github.com/PhantomLeii/banking-system/",
    techStack: [
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        imageClassName: "w-8 h-8",
        alt: "Django",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        imageClassName: "w-8 h-8",
        alt: "React",
      },
      {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        imageClassName: "w-8 h-8",
        alt: "TailwindCss",
      },
    ],
  },
];

// Experience
export const experience: Experience[] = [
  {
    year: "2018 - 2021",
    company: "Thrupps & Co.",
    position: "General Assistant",
    desc: `At Thrupps & Co., I contributed significantly to the company's success by taking on the responsibility of decorating food hampers and assisting with gift wrapping. My role required meticulous attention to detail and adherence to strict guidelines provided by my superiors. A key aspect of my job was to infuse each hamper with a unique touch of creativity, ensuring that our customers were delighted with the final product. Working closely with a dedicated team, we collectively aimed to meet tight deadlines, ensuring that gifts and hampers were prepared and delivered on time. This experience not only honed my organizational and teamwork skills but also allowed me to apply my creative abilities in a practical setting, contributing to the overall satisfaction of our clients.`,
  },
];
