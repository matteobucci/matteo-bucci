import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const ProjectsList = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      projects: allMdx(
        filter: { frontmatter: { template: { eq: "project" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              period
              description
              image
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {data.projects.edges.map(({ node }) => {
          const { frontmatter } = node;
          const { title, period, description, image, slug } = frontmatter;

          return (
            <div className="muted card flex" key={`project-${slug}`}>
              {image && <StaticImage src={image} />}
              <p>
                <time>{period}</time>
                {title}
              </p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;