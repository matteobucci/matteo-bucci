import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import React from 'react';


//   title
//   period
//   description
//   image

const ProjectContainer = ({ projects }) => {
  return (
    <div className="project-container">
      {projects.map((project) => {

        const image = getImage(project.image);

        const bodyHasContent = project.body && project.body.trim().length > 0;

        return (
            <div
              className={`project-item ${!project.description ? "small" : ""}`} key={project.id}
            >
                <GatsbyImage image={image} alt={project.name || "No description provided"} />
                  <div className="project-item__content">
                    <p className="project-item__title">{project.name}</p>
                    <p className="project-item__description">{project.description}</p>
                    <p className="project-item__link"> {bodyHasContent && "See more"}</p>
                   
                  </div>
            </div>
          );
      })}
    </div>
  );
};


export default ProjectContainer;
