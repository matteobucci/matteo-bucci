import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

import Technologies from '../components/sections/technologies/technologies';
import Experiences from '../components/sections/experiences';
import { AboutSidebar } from '../components/sidebar';

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
      <div className="grid">

        <div>
          <p>
                Hi there! I am {age} years old, and I'm passionate about technology since I have
                memories.
              </p>

              <p>
                Back in 2017, almost as a game, me and Mirko launched a project that became parts of our lifes since then. 
                Years of trials and errors brought me, toghether with Francesco and Mattia, to the creation of a company in Luxembourg.
              </p>

              <p>
                What we learned probably can't be summarized in a book, even less in a paragraph, but the most part of my professional life depens on what I've done on RoomMate.
              </p>

              <p>
                In short, I'm a fullstack engineer, passionate about cloud, devops and good software designs.
              </p>


              <p>During these years, in RoomMate we worked in countless projects making one, big platform. We provide support for countless companies around Europe.</p>

              <p>We adopted our tech stack to our circumstances but I'm more eager than ever to explore new tech around me.</p>
        </div>
      <AboutSidebar />
      </div>
      


      <Technologies />

      {/* <Experiences /> */}

      <p></p>
    </div>
  );
}

AboutPage.Layout = Layout;

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage