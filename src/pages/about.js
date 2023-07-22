import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

import Technologies from '../components/sections/technologies/technologies';
import Experiences from '../components/sections/experiences';

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

      <Technologies />

      <Experiences />

      <p></p>
    </div>
  );
}

AboutPage.Layout = Layout;

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage