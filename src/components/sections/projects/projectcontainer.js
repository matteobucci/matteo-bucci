import { Link } from 'gatsby';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import githubIcon from "../../../assets/icons/github_bw.svg";

const ProjectContainer = ({ projects }) => {
  return (
    <div className="project-container">
      {projects.map((project) => {

        const image = getImage(project.image);

        const bodyHasContent = project.body && project.body.trim().length > 0;

        const tags = project.tags?.split(",") || [];

        const repository = project.repository;

        return (
          <div
            className={`project-item`} key={project.id}
          >

            <div className="project-item__content">
              {image && <GatsbyImage className="project-image" objectFit='cover' image={image} alt={project.name || "No description provided"} />}
              {!image && <div className="project-image-placeholder"></div>}
              <div className="project-item__title_container">
                <p className="project-item__title">{project.name}</p>
                {repository && <Link className="project-item__gh_icon" to={repository}>
                  <img src={githubIcon} alt="Github repository" />
                </Link>}
              </div>
              <p className="project-item__period">{project.period}</p>
              <p className="project-item__description">{project.description}</p>
              <div className="project-item__tags">
                {tags.map((tag) => (
                  <span className="tag">{tag}</span>
                ))}
              </div>
              {/* {bodyHasContent && <Link className="project-item__link" to={project.slug}>
                See more
              </Link>} */}

            </div>
          </div>
        );
      })}
    </div>
  );
};


export default ProjectContainer;
