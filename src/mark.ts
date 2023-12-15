import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const user = {
  name: "Mark O. Lumba",
  position: "Experienced Front-End Engineer",
  tagLine:
    "I build exceptional and accessible digital experiences for the web.",
  nav: ["About", "Experience", "Projects"],
  socials: [
    {
      icon: FaGithub,
      link: "https://github.com/marklumba1",
    },
    {
      icon: FaFacebook,
      link: "https://github.com/marklumba1",
    },
    {
      icon: FaInstagram,
      link: "https://github.com/marklumba1",
    },
    {
      icon: FaLinkedin,
      link: "https://github.com/marklumba1",
    },
  ],
  experiences: [
    {
      date: "May 2017 - Mar 2018",
      company: "Accenture",
      position: "Associate Software Engineer",
      description:
        "This was an entry level role where I was assigned to various roles including development and QA roles. Mainly I developed web based apps using various frameworks including React and Ionic.",
      techs: [
        "React.js",
        "JavaScript",
        " Cascading Style Sheets (CSS)",
        "Functional Testing",
        " Ionic Framework ",
        "Swift",
        "Bootstrap",
      ],
    },
    {
      date: "May 2018 - Jul 2021",
      company: "JOSE B LINGAD MEMORIAL GENERAL HOSPITAL",
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
  ],
};
export default user;
