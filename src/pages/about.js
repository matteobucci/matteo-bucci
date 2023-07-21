// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import TechContainer from '../components/techcontainer'

import react from "../assets/icons/react.svg";
import angular from "../assets/icons/angular.svg";
import expressjs from "../assets/icons/express.svg";
import gatbsy from "../assets/icons/gatsby.svg";
import nodejs from "../assets/icons/nodejs.svg";
import typescript from "../assets/icons/typescript.svg";
import javascript from "../assets/icons/javascript.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import firebase from "../assets/icons/firebase.svg";
import mongodb from "../assets/icons/mongodb.svg";

const currentStack = [
  {
    name: "Angular",
    description:
      "From Angular 8 to Angular 14, I have developed and mainteined RoomMate's web app. We created complex dashboards making use of the latest trends and best practises",
    icon: angular,
  },
  {
    name: "ExpressJS",
    description: "Description",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    description: "I have used MongoDB in many projects and at different scales. I've deployed pipelines and graphs.",
    icon: mongodb,
  },
  {
    name: "NodeJS",
    description: "Description",
    icon: nodejs
  },
  {
    name: "Typescript",
    description: "Description",
    icon: typescript,
  },
  {
    name: "Firebase",
    description: "Description",
    icon: firebase
  }
];

const techILike = [
  {
    name: "React",
    description: "And its flavours Gatsby and NextJS",
    icon: react,
  },
  {
    name: "Gatsby",
    description: "And its flavours Gatsby and NextJS",
    icon: react,
  },
  {
    name: "Javascript",
    description: "Description",
    icon: javascript,
  },
  {
    name: "HTML",
    description: "Description",
    icon: html,
  },
  {
    name: "CSS",
    description: "Description",
    icon: css,
  }
];

const techIHaveExperienceWith = [
  {
    name: "React",
    description: "And its flavours Gatsby and NextJS",
    icon: react
  },
];

const calculateAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age;
};

// Step 2: Define your component
const AboutPage = () => {
  
  const age = calculateAge('08/03/1995');

  return (
    <div>
      <p>
        Hi there! I am {age} years old, passionate about technology since I have
        memories.
      </p>

      <p></p>

      <h2>Techologies</h2>

      <h3>Stack I'm currently working with</h3>
      <TechContainer techs={currentStack} />

      <h3>Technologies I'm confortable with</h3>
      <TechContainer techs={techILike} />

      <h3>Things I have some experience with</h3>
      <TechContainer techs={techIHaveExperienceWith} />
    </div>
  );
}

AboutPage.Layout = Layout;

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage