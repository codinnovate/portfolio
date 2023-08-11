import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "BIO",
  },
  {
    id: "work",
    title: "PLACES",
  },
   {
    id: "portfolio",
    title: "PORTFOLIO",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Framer Motion",
    icon:"https://www.framer.com/images/favicons/favicon.png"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Software Developer",
    company_name: "SkilledCheck",
    icon: 'https://yt3.googleusercontent.com/C7UsVmBQB_Z4mdGe3skdUPHkZZwP7eQTXOrRe2n2XDZ13bviXRdfT2XhQU_P8exSn4wEH_u_iA=s900-c-k-c0x00ffffff-no-rj',
    iconBg: "#000",
    date: "November 2022 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and Django.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed secure Api  endpoints For Mobile Developers.",
    ],
  },
  {
    title: "Admin Officer",
    company_name: "Smartteller",
    icon: "https://th.bing.com/th/id/R.c93c88c96b7890927e995f9f5491a19a?rik=VsvaAJDwYeSufA&pid=ImgRaw&r=0",
    iconBg: "#000",
    date: "Jan 2021 - April 2022",
    points: [
     "Coordination: I effectively coordinated teams and departments, ensuring smooth collaboration and communication.",
    "Documentation: I maintained organized records and digital archives, aiding quick information retrieval and compliance.",
    "Resource Management: I managed budgets, purchases, and maintenance, optimizing resource utilization for seamless operations.",
    ],
  },
  
];

const projects = [
  {
    name: "Whatsappp",
    description:
      "This a webapp that looks exactly like the whatsapp  web, icons where taken from material-ui icons, tailwindcss for styling and, ofcourse the mighty reactjs .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://whatsappp.vercel.app/',
    source_code_link: "https://github.com/samuelcody710/Whatsapp",
  },
  {
    name: "Entflix",
    description:
      "This a movie streaming website similar to netflix, contents where fetched from imbd Api, tailwind-scrollbar was used to remove the traditional scrollbar, and ofcourse tailwindcss for styling",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: 'https://entflixtv.vercel.app/',
    source_code_link: "https://github.com/",
  },
  {
    name: "Kidscantech",
    description:
      "An innovative and educational online platform that empowers young minds to explore the exciting world of technology and coding. our mission is to inspire and nurture the next generation of digital creators, problem solvers, and tech-savvy individuals.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "framer",
        color: "green-text-gradient",
      },
    ],
    image: 'https://kidscantech.vercel.app/',
    source_code_link: "https://github.com/samuelcody710/kidscantech",
  },
];

export {  technologies, experiences,  projects };
