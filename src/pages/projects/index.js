import * as React from 'react';
import Layout from '../../components/layout';
import ProjectsList from '../../components/sections/projects/projectslist';
import Seo from '../../components/seo';

const ProjectsPage = ({data}) => {

  return (
    <div>
      <ProjectsList/>
    </div>
  );
}

ProjectsPage.Layout = Layout;

export const Head = () => <Seo title="Projects" />

// Step 3: Export your component
export default ProjectsPage
