import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { AboutSidebar } from "../components/sidebar";
import { TypingIntroduction } from "../components/typing-introduction";
import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div className="grid">
      <div>
        <TypingIntroduction />

        <p>Welcome on my little internet space</p>

        <p>Don't be shy and look around!</p>

        <h2>Why?</h2>
        <ul>
          <li>I love to build things.</li>
          <li>
            Lately I found myself building things that either I can't share or
            that I would love to share but are not ready yet. I thought, let's
            do something simple (I was wrong).
          </li>
          <li>
            I wanted to consolidate some technology I was exploring since a
            while.
          </li>
          <li>I needed a place to host my thoughts.</li>
          <li>
            I needed a place where I can share my learnings and check my
            progress, year by year.
          </li>
          <li>
            If I learn something new or something cool, I needed a simpler
            project to use as workbench. Using production data of paying
            customer is NOT a good idea.
          </li>
          <li>I needed a place that forces me to write more.</li>
          <li>
            More than writing a CV or completing my linkedin profile, CTRL+P
            looks funnier and easier to do.
          </li>
          <li>
            I wanted to do something well done to prove it helps in the long
            run. I would like to be ambitious and say... If I abandon it for
            more than 6 months, I still should be able to compile. lol
          </li>
          <li>
            I wanted to improve my English skills. If a message is meant to be
            pubblic, I think twice before publishing it.
          </li>
          <li>
            I wanted to optimize the SEO aroud my name. I'm curious to see the
            results of this experiment.
          </li>
          <li>And so, here I am.</li>
        </ul>
      
        <h1>Better professionals</h1>
        <a  href="https://xyproblem.info/">XY problem</a>
        

        <h2>Still on this page?</h2>

        <p>There's nothing more to see here! Look somewhere else :)</p>

        <StaticImage
          alt="Myself, Matteo Bucci when I was around 8"
          src="../assets/matteo-2003.jpg"
        />
      </div>

      <div>
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
        <AboutSidebar />
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
