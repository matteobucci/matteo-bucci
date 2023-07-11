// Step 1: Import React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <p>Welcome on my little internet space</p>

      <p>Don't be shy.</p>

      <h2>Why?</h2>
      <ul>
        <li>I love to build things.</li>
        <li>
          Lately I found myself building things that either I can't share or
          that I would love to share but are not ready yet. I thought, let's do
          something simple (I was wrong).
        </li>
        <li>
          I wanted to consolidate some technology I was exploring since a while.
        </li>
        <li>I needed a place to host my thoughts.</li>
        <li>
          I needed a place where I can share my learnings and check my progress,
          year by year.
        </li>
        <li>If I learn something new or something cool, I needed a simpler project to use as workbench. Using production data of paying customer is NOT a good idea.</li>
        <li>I needed a place that forces me to write more.</li>
        <li>
          More than writing a CV or completing my linkedin profile, CTRL+P looks
          funnier and easier to do.
        </li>
        <li>And so, here I am.</li>
      </ul>
      <StaticImage
        alt="Myself, Matteo Bucci when I was around 8"
        src="../images/matteo-2003.jpg"
      />
    </div>
  );
};

IndexPage.Layout = Layout;

export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
