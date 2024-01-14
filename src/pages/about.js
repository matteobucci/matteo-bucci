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

          <p>I've graduated in Bologna in computer engineering</p>
          <p>In 2017 one personal project became my ticket into the most prestigius startup programs of Italy.</p>
          <p>I've lived in Torino, in Florence, and travelled around with my partners.</p>
          <p>Since 2019 I've been living in Luxembourg, where RoomMate has thrived as prominent startup of the country ecosystem and and source of the ones of the most respected Property Management System in the European Market.</p>

          <p>On 2023 RoomMate joined Joivy, and our efforts expanded into creating the most innovative IT platform to one of the leading players in the residential market in Europe.</p>

          <br />
          <p>~</p>
          <br />
          <p>I got my first PC when I was 6 years old.</p>
          <p>Since then, I have always been amazed by what technology enables and have tried to understand how things work.</p>
          <p>Years later, I now define how things need to work and have realized how much global effort and resources are needed.</p>
          <p>My goal is to be part of this global effort, only to become ever more amazed by what is possible to achieve within groups with great ideas.</p>
          <br />
          {/* <p>My family got our first PC back in 2001. It was a Windows ME machine with an Intel Celeron CPU.</p>
          <p>From that moment on, I was the one in the family to handle any computer-related issues.</p>
          <p>I didn't start thinking seriously about programming and computer science until I enrolled at the University of Bologna in 2014. My dream was to finally understand what brings a computer to life, from its silicon to the high-level structures that power today's information world.</p>
          <p>I’ve always enjoyed playing with Legos. The feeling of building something non-existent from simple structures was, and still is, thrilling to me. Getting to finally understand the basic concepts of computer science felt like a rain of Legos falling from the sky. Maybe not everyone enjoys it, but I do.</p>
          <p>Every new concept learned unlocked a huge amount of opportunities and potential personal projects. While some of them never reached completion, some of them evolved quite nicely.</p>
          <p>One of these projects, a mobile app that lets tenants organize their co-living experience together, went a little further the day my friends and I presented it at the 2017 Startup Day organized by the University of Bologna.</p>
          <p>After that day, it’s not that my life changed overnight. But this project gave me the opportunity to be trained and mentored in some of the best digital acceleration programs Italy has to offer.</p>
          <p>In 2019, almost by chance, my partners and I, Mirko Martignon, Mattia Raffaelli, and Francesco Cotugno, were selected to attend Fit 4 Start, a program backed by the Luxembourg startup ecosystem that lasted 3 months.</p>
          <p>During that period, we had the opportunity to further develop our business skills, and we decided to pivot our idea, successful in terms of adoption but not enough monetizable, into what RoomMate is today: a leading property management system used in more than 7 European countries and still growing.</p>
          <p>Luxembourg became my new home. There, I found a vibrant startup ecosystem, and I realized how a great environment is one of the key factors for the success of promising ideas.</p>
          <p>That was also the period when I delved into cloud computing and grasped the power behind that concept. My academic path provided a solid foundation, but it never conveyed how powerful the cloud revolution would be.</p>
          <p>A good design can handle scale and increasing complexity and can help deliver at the speed of light. I didn't need to create a startup to learn about that, but it provided a workbench where I could study, validate design hypotheses, and understand what it truly means to transition from theory to practice.</p> */}

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