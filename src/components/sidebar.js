import React from "react";
import me from "../images/matteo-2021.jpg";
import { StaticImage } from "gatsby-plugin-image";

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        <h2>Me</h2>
        <StaticImage
          alt="Matteo Bucci"
          src={me}
        />
      </div>
    </aside>
  );
};
