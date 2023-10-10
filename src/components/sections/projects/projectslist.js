import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ProjectContainer from "./projectcontainer";

const ProjectsList = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      projects: allMdx(
        filter: { frontmatter: { template: { eq: "project" } } }
      ) {
        edges {
          node {
            id
            body
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              name
              period
              description
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const projectList = data.projects.edges.map(it => ({
    id: it.node.id,
    body: it.node.body,
    ...it.node.frontmatter,
  }));
  
  return (
    <div>
      <h1>Projects</h1>
      <div>

         <ProjectContainer projects={projectList}></ProjectContainer>
      </div>
    </div>
  );
};

export default ProjectsList;