import React from "react";
import me from "../images/matteo-2021.jpg";

export const AboutSidebar = () => {
  return (
    <aside className="post-sidebar">
      <div className="post-sidebar-card">
        <h2>Me</h2>
        <img src={me} alt="Matteo Bucci" />
      </div>
    </aside>
  );
};
