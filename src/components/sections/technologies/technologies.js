import * as React from "react";
import TechContainer from "./techcontainer";

import { subtitle } from "./technologies.module.css";


import react from "../../../assets/icons/react.svg";
import angular from "../../../assets/icons/angular.svg";
import expressjs from "../../../assets/icons/express.svg";
import gatbsy from "../../../assets/icons/gatsby.svg";
import nodejs from "../../../assets/icons/nodejs.svg";
import typescript from "../../../assets/icons/typescript.svg";
import javascript from "../../../assets/icons/javascript.svg";
import html from "../../../assets/icons/html.svg";
import css from "../../../assets/icons/css.svg";
import firebase from "../../../assets/icons/firebase.svg";
import mongodb from "../../../assets/icons/mongodb.svg";
import python from "../../../assets/icons/python.svg";
import aws from "../../../assets/icons/aws.svg";
import azure from "../../../assets/icons/azure.svg";
import c from "../../../assets/icons/c.svg";
import googlecloud from "../../../assets/icons/google_cloud.svg";
import java from "../../../assets/icons/java.svg";
import kotlin from "../../../assets/icons/kotlin.svg";
import rxjs from "../../../assets/icons/rxjs.svg";
import redis from "../../../assets/icons/redis.svg";
import sqlite from "../../../assets/icons/sqlite.svg";
import mysql from "../../../assets/icons/mysql.svg";
import graphql from "../../../assets/icons/graphql.svg";

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
    description:
      "A great type language that allowed an increase complexity in our codebase.",
    icon: typescript,
  },
  {
    name: "Firebase",
    description:
      "I have use deeply most of the Firebase services across the years. From auth to firestore, from storage to analytics and more.",
    icon: firebase,
  },
  {
    name: "Google Cloud",
    description:
      "and its services are powering a lot of my projects. A non complete list of services I have used: Cloud Functions, Cloud Run, Storage, Cloud Build, Cloud Scheduler, Pub/Sub, Cloud Tasks, Logging, Monitoring, IAM, Cloud Firestore, App Engine, Cloud Run",
    icon: googlecloud,
  },
  {
    name: "RxJS",
    description: "A great way to handle async operations and streams",
    icon: rxjs,
  },
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
    description:
      "With Jupyter Notebooks and standalone, a great way to prototype and test ideas.",
    icon: python,
  },
  {
    name: "GraphQL",
    description:
      "I have used GraphQL to build some integrations and, of course, on this website. It's a great way to build APIs.",
    icon: graphql
  },
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
    icon: redis,
  },
  {
    name: "SQLite",
    description: "",
    icon: sqlite,
  },
  {
    name: "MySQL",
    description: "",
    icon: mysql,
  },
  {
    name: "Java",
    description: "",
    icon: java,
  },
  {
    name: "Kotlin",
    description: "",
    icon: kotlin,
  },
  {
    name: "C",
    description: "",
    icon: c,
  },
  {
    name: "AWS",
    description: "",
    icon: aws,
  },
  {
    name: "Azure",
    description: "",
    icon: azure,
  },
];



// Step 2: Define your component
const Technologies = () => {
  return (
    <div className="technologies">
      <h2>Techologies</h2>

      <h3>Stack I'm currently working with</h3>
      <TechContainer techs={currentStack} />

      <h3>Technologies I'm confortable with</h3>
      <TechContainer techs={techILike} />

      <h3>Things I have some experience with</h3>
      <p className={subtitle}>Or that are not really important to mention, given the ones above</p>
      <TechContainer techs={techIHaveExperienceWith} />
    </div>
  );
};


export default Technologies;
