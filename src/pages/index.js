import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Statistics from "../components/stats";
import { TypingIntroduction } from "../components/typing-introduction";

import sea from '../assets/sea.gif'


const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <div className="grid">
        <div>
          <TypingIntroduction />


          <p>Welcome on my little internet space</p>

          <img className='home-divisor' alt='' src={sea} />

          <p>On <Link to="/about">this other page</Link> I introduce myself properly</p>

          <h2>Why this?</h2>
          <ul>
            <li>It was fun to build</li>
            <li>
              I like to start something that looks simple but get more interesting the more time you spend with.
            </li>
            <li>
              I wanted to consolidate some technologies I was exploring.
            </li>
            <li>I needed a place to host my thoughts.</li>
            <li>
              If I start sharing my learning here, I will be motivated to learn and I will compare my progress with the past.
            </li>
            <li>
              Not every experiments needs to be made on my company production database. (It's a joke, I don't do that)
            </li>
            <li>
              It's a funny way to keep track of my profile.
            </li>
            <li>
              I wanted to start a project with very little overhead. I just want to add content and
              it just needs to work. If I forget in 2 years, it should still work the same.
            </li>
            <li>
              I wanted to improve my English skills. If a message is meant to be
              pubblic, I think twice before publishing it.
            </li>
            <li>
              If you look for Matteo Bucci on Google, it MUST be me. Jokes apart, I would to apply some SEO as well.
            </li>
            <li>And so, here I am.</li>
          </ul>

          {/* <h2>Still on this page?</h2>

          <p>There's nothing more to see here! Look somewhere else :)</p>


          <StaticImage
            alt="Myself, Matteo Bucci when I was around 8"
            src="../assets/matteo-2003.jpg"
          /> */}
        </div>

        <div>
          <h2>Latest posts</h2>
          {data.latest.edges.map((item) => {
            const node = item.node;
            return (
              <article key={node.id}>
                <h2>
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Statistics</h2>
        <p className="subtitle">Coming from my Garmin</p>
        <Statistics />
      </div>
    </div>
  );
};

IndexPage.Layout = Layout;

export const Head = () => <Seo title="Home Page" />;

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMdx(
      limit: 6
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
