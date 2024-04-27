import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

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
      date: "May 2017 - Mar 2018",
      company: "Accenture",
      companyLink: "https://www.accenture.com/ph-en",
      position: "Associate Software Engineer",
      description:
        "This was an entry level role where I was assigned to various roles including development and QA roles. Mainly I developed web based apps using various frameworks including React and Ionic.",
      techs: [
        "React.js",
        "JavaScript",
        " Cascading Style Sheets (CSS)",
        "Functional Testing",
        "Ionic Framework",
        "Swift",
        "Bootstrap",
      ],
    },
    {
      date: "May 2018 - Jul 2021",
      company: "Jose B Lingad Memorial General Hospital",
      companyLink: "https://jblmgh.doh.gov.ph/",
      position: "Administrative Assistant I",
      description:
        "In this position, I was responsible for analyzing patient data, gathering information and documents and ensure that the medical records are organized, accurate and complete.",
      techs: [
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
      date: "Jul 2021 - Mar 2022",
      company: "Department of Information and Communications Technology",
      companyLink: "https://dict.gov.ph/",
      position: "Project Development Officer III",
      description:
        "For this role, I developed a web application that was used for managing the students of the ICT Academy Program of DICT. I utilized React JS and Redux Tool Kit for frontend and MySql for backend.",
      techs: ["React.js", "MySQL"],
    },
    {
      date: "Apr 2022 - Feb 2023",
      company: "Jose B Lingad Memorial General Hospital",
      companyLink: "https://jblmgh.doh.gov.ph/",
      position: "Information System Analyst I",
      description:
        "My role was to develop web based applications that uses highly reusable components by utilizing Vue3 Composition API, HTML5, CSS, Bootstrap for front end and MySQL , SQL Server and PHP for backend. I also maintain existing systems that are created using JQuery.",
      techs: ["Vue3", "HTML5", "MySQL", "Bootstrap", "PHP", "SQL Server"],
    },
    {
      date: "Jun 2023 - Present",
      company: "Accenture",
      companyLink: "https://www.accenture.com/ph-en",
      position: "Advanced App Engineering Sr Analyst",
      description:
        "In my current position, I work as a React front-end engineer. I collaborate with UI/UX designers to turn their designs into functional webpages. We also employ an agile workflow.",
      techs: ["React.JS", "HTML5", "CSS", "Adobe Experience Manager"],
    },
  ],
};
export default user;
