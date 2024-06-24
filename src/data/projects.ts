import { LINKS_PLACEHOLDER } from "node_modules/astro/dist/content/consts";

export const projects = [
  {
    title: "Automated Testing - Laravel Dusk & Selenium",
    description: "Dived into PHP automated testing and whipped up some simple docs on setting up and using Laravel Dusk and Selenium. Check out the setup and links for two test cases!",
    image: "/image/index/automated-testing.svg",
    tags: ["Laravel", "php", "Automated Testing"],
    html:  `<a class="underline cursor-pointer hover:text-light-hover dark:hover:text-dark-hover transition text-title" href="https://docs.google.com/document/d/1XTw3KhSLihczlayC-6ZxDfXLleHW0ysLHNhK0AAoAyk/edit?usp=sharing" target="_blank">Laravel Dusk</a> 
            - 
            <a class="underline cursor-pointer hover:text-light-hover dark:hover:text-dark-hover transition text-title" href="https://docs.google.com/document/d/1c0Knk93-bPfb37HrIEqYItgoKgKQY-taV3eMJEBN_rQ/edit?usp=sharing" target="_blank">Selenium</a>`,
  },
  {
    title: "HackEclipse",
    description: `Built for a GDSC USM hackathon, this website allows participants register and submit projects, and allowed judges to evaluate them. The event got canceled, but hey, we finished the website!`,
    image: "/image/index/HackEclipse.svg",
    tags: ["Fullstack", "Astro", "Tailwind CSS", "Javascript", "Firebase"],
  },
  {
    title: "Internify",
    description: "A fullstack project for school. Developed a dynamic internship management platform where users can explore internship opportunities, showcase their personal projects, and receive tailored recommendations based on their preferences.",
    image: "/image/index/internify.svg",
    tags: ["Fullstack", "NextJS", "React", "Typescript", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Static Website - Therapist Portfolio",
    description: "My very first responsive static portfolio website using Next.js and React.js. Designed the UI in Figma. Simple, but it`s my first website and I'm proud of it!",
    image: "/image/index/therapist.svg",
    tags: ["Frontend", "React", "Framer Motion"],
    link: "https://limkimseah.com/"
  },
  {
    title: "Fullstack Hackathon Project - Trustay",
    description: "Developed a prototype enabling users to seamlessly rent properties while giving administrators a comprehensive reservation overview.",
    image: "/image/index/trustay.svg",
    tags: ["Fullstack", "NextJS", "React", "Typescript", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Depression Tweet Data Collection",
    description: "Worked on a research project on Depression Tweet Data with Dr. Jasy Liew Suet Yan. Used Twitter API and snscrape to collect loads of tweets. Spent time cleaning and validating the data to make sure it was spot on.",
    image: "/image/index/research.svg",
    tags: ["Python", "Data Collection", "Data Cleaning", "Data Validation"],
  },
  {
    title: "PIXEL2022",
    description: "PIXEL is the annual tech showcase at USM. It is built with database of all student projects and a dashboard for judges to evaluate them.",
    image: "/image/index/pixelusm.svg",
    tags: ["Svelte", "Firebase", "Tailwind CSS"],
    link: "https://pixel2022.cssocietyusm.com/"
  },
]