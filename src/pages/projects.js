// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const ProjectsPage = ({data}) => {

  const projects = data.projects.edges;

  return (
    <div>
      <div className="highlight-preview">
        {projects.map((item) => {
          const project = item.node.frontmatter;
          return (
            <div className="muted card flex" key={`project-${project.slug}`}>
              {project.image && <StaticImage src={project.image} />}
              <div>
                <time>{project.period}</time>
                {project.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ProjectsPage.Layout = Layout;

export const Head = () => <Seo title="Projects" />

// Step 3: Export your component
export default ProjectsPage

export const pageQuery = graphql`
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
`;