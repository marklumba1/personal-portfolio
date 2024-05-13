import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Port from "./assets/images/personal-portfolio.png";
import Edify from "./assets/images/edify.png";
import Image from "./components/image/image";

const user = {
  name: "Mark O. Lumba",
  position: "Experienced Front-End Engineer",
  tagLine:
    "I build exceptional and accessible digital experiences for the web.",
  nav: [
    { title: "About", anchor: "#about" },
    { title: "Experience", anchor: "#experience" },
    { title: "Projects", anchor: "#projects" },
  ],
  socials: [
    {
      icon: FaGithub,
      link: "https://github.com/marklumba1",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/mark.lumba.71",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/mark-lumba-bb6401133/",
    },
  ],
  experiences: [
    {
      rightItem: "Jun 2023 - Present",
      title: "Accenture",
      link: "https://www.accenture.com/ph-en",
      subTitle: "Advanced App Engineering Sr Analyst",
      description:
        "In my current position, I work as a React front-end engineer. I collaborate with UI/UX designers to turn their designs into functional webpages. We also employ an agile workflow.",
      badges: ["React.JS", "HTML5", "CSS", "Adobe Experience Manager"],
    },
    {
      rightItem: "Apr 2022 - Feb 2023",
      title: "Jose B Lingad Memorial General Hospital",
      link: "https://jblmgh.doh.gov.ph/",
      subTitle: "Information System Analyst I",
      description:
        "My role was to develop web based applications that uses highly reusable components by utilizing Vue3 Composition API, HTML5, CSS, Bootstrap for front end and MySQL , SQL Server and PHP for backend. I also maintain existing systems that are created using JQuery.",
      badges: ["Vue3", "HTML5", "MySQL", "Bootstrap", "PHP", "SQL Server"],
    },
    {
      rightItem: "Jul 2021 - Mar 2022",
      title: "Department of Information and Communications Technology",
      link: "https://dict.gov.ph/",
      subTitle: "Project Development Officer III",
      description:
        "For this role, I developed a web application that was used for managing the students of the ICT Academy Program of DICT. I utilized React JS and Redux Tool Kit for frontend and MySql for backend.",
      badges: ["React.js", "MySQL"],
    },
    {
      rightItem: "May 2018 - Jul 2021",
      title: "Jose B Lingad Memorial General Hospital",
      link: "https://jblmgh.doh.gov.ph/",
      subTitle: "Administrative Assistant I",
      description:
        "In this position, I was responsible for analyzing patient data, gathering information and documents and ensure that the medical records are organized, accurate and complete.",
      badges: [
        "People Management",
        "Leadership",
        "Teamwork",
        "PeopleSoft",
        "Interpersonal Skills",
        "Engaging People",
        "Coaching",
      ],
    },
    {
      rightItem: "May 2017 - Mar 2018",
      title: "Accenture",
      link: "https://www.accenture.com/ph-en",
      subTitle: "Associate Software Engineer",
      description:
        "This was an entry level role where I was assigned to various roles including development and QA roles. Mainly I developed web based apps using various frameworks including React and Ionic.",
      badges: [
        "React.js",
        "JavaScript",
        " Cascading Style Sheets (CSS)",
        "Functional Testing",
        "Ionic Framework",
        "Swift",
        "Bootstrap",
      ],
    },
  ],
  projects: [
    {
      rightItem: <Image image={Edify} />,
      title: "Edify - Hospital Information System",
      link: "",
      subTitle: "",
      description:
        "I work on the team that creates Edify HMS, an online application that aids medical professionals in giving patients better care by gathering patient data and information for a quicker exchange of information between physicians, nurses, and other support staff. I was responsible for the modules that handles doctor referrals of patients, warehousing of hospital supplies and statistical reports.",
      badges: ["React.JS", "HTML5", "CSS", "Adobe Experience Manager"],
    },
    {
      rightItem: <Image image={Port} />,
      title: "Personal Portfolio V1",
      link: "",
      subTitle: "",
      description:
        "I created my portfolio to showcase my work and let others know about me. It is created using React, TailwindCSS and GSAP for animations.",
      badges: ["React.JS", "Tailwind", "GSAP"],
    },
  ],
};
export default user;
