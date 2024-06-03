export interface NavLink {
  title: string;
  url: string;
}

export interface Education {
  year: string;
  study: string;
  institution: string;
  desc: string;
}

export interface TechStack {
  url: string;
  imageClassName: string;
  alt: string;
}

export interface Project {
  title: string;
  desc: string;
  image: string;
  siteUrl: string;
  techStack: TechStack[];
}

export interface Experience {
  year: string;
  position: string;
  company: string;
  desc: string;
}
