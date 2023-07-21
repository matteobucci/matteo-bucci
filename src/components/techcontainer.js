import React from 'react';

const TechContainer = ({ techs }) => {
  return (
    <div className="tech-container">
      {techs.map((tech) => (
        <div className="tech-item" key={tech.name}>
          <img src={tech.icon} alt={tech.name} />
          <div className="tech-item__content">
            <p className="tech-item__title">{tech.name}</p>
            <p className="tech-item__description">{tech.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechContainer;
