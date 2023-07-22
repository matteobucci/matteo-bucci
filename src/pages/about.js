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
import python from "../assets/icons/python.svg";
import aws from "../assets/icons/aws.svg";
import azure from "../assets/icons/azure.svg";
import c from "../assets/icons/c.svg";
import googlecloud from "../assets/icons/google_cloud.svg";
import java from "../assets/icons/java.svg";
import kotlin from "../assets/icons/kotlin.svg";
import rxjs from "../assets/icons/rxjs.svg";
import redis from "../assets/icons/redis.svg";
import sqlite from "../assets/icons/sqlite.svg";
import mysql from "../assets/icons/mysql.svg";

const currentStack = [
  {
    name: "Angular",
    description:
      "From Angular 8 to Angular 14, I have developed and mainteined RoomMate's web app. We created complex dashboards making use of the latest trends and best practises",
    icon: angular,
  },
  {
    name: "MongoDB",
    description:
      "I have used MongoDB in many projects and at different scales. I've deployed pipelines and graphs.",
    icon: mongodb,
  },
  {
    name: "NodeJS",
    description: "I don't think it needs a description.",
    icon: nodejs,
  },
  {
    name: "ExpressJS",
    description:
      "Express JS is powering the backend of RoomMate's web app. Several custom middleware are providing security and logging across the platform.",
    icon: expressjs,
  },
  {
    name: "Typescript",
    description: "A great type language that allowed an increase complexity in our codebase.",
    icon: typescript,
  },
  {
    name: "Firebase",
    description: "I have use deeply most of the Firebase services across the years. From auth to firestore, from storage to analytics and more.",
    icon: firebase,
  },
  {
    name: "Google Cloud",
    description: "and its services are powering a lot of my projects. I have used it for hosting, storage, databases, pipelines and more.",
    icon: googlecloud
  }, {
    name: "RxJS",
    description: "A great way to handle async operations and streams",
    icon: rxjs
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
    icon: gatbsy,
  },
  {
    name: "Python",
    description: "With Jupyter Notebooks and standalone, a great way to prototype and test ideas.",
    icon: python,
  }
];

const techIHaveExperienceWith = [
  {
    name: "Javascript",
    description: "",
    icon: javascript,
  },
  {
    name: "HTML",
    description: "",
    icon: html,
  },
  {
    name: "CSS",
    description: "",
    icon: css,
  },
  {
    name: "Redis",
    description: "",
    icon: redis
  },
  {
    name: "SQLite",
    description: "",
    icon: sqlite
  },
  {
    name: "MySQL",
    description: "",
    icon: mysql
  },
  {
    name: "Java",
    description: "",
    icon: java
  },
  {
    name: "Kotlin",
    description: "",
    icon: kotlin
  },
  {
    name: "C",
    description: "",
    icon: c
  },
  {
    name: "AWS",
    description: "",
    icon: aws
  },
  {
    name: "Azure",
    description: "",
    icon: azure
  }
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

      <h2>Hands-on experience</h2>

      <p></p>

      <h3>Serverless systems</h3>

      <p>
        I'm confortable on designing high-scalable, high-performance system
        leveraging cloud resources in serverless enviroment. I implemented
        several complex use cases that could be scaled horizontally with the use
        of a mix of designs and asyncronous systems.
      </p>

      <h3>Hybrid architectures</h3>

      <p>
        Microservices or monolith? Event driven or not? Some systems simply
        needs to make the best use of each. I've got experience on taking
        decision depending on the benefits of each architecture style.
      </p>

      <h3>Continous deployment</h3>

      <p>
        Tools are like superpowers that can help you focus on the value added part of my activities. I've got experience on setting up CI/CD pipelines to automate the deployment of my projects, because if there's no need to write any code twice, why should I deploy it twice?
        I've worked with several CI/CD tools like Github Actions and Google Cloud Build.
      </p>

      <h3>Product analytics</h3>
      <p>
        Metrics are a fundamental part of every product. I've got experience on designing and implementing metrics and analytics systems to track the usage of a product and its features.
      </p>

      <h3>Product development</h3>

      <p>
        I've developed and designed B2B and B2C products starting from the
        business and design requirements. My experiences brought me a set of
        horizontal skills in this fields, that are helping me on evaluating the
        challenges behind the creation of a product from scratch. I've got
        experience in digital marketing, SEO, customer support, sales and on how to organize parties :)
      </p>

      <p></p>
    </div>
  );
}

AboutPage.Layout = Layout;

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage