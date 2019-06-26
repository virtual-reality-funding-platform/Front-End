import  React from 'react';
import Projects from './Projects';
import ProjectForm from './ProjectForm';

const ProjectContainer = () => {
    return(
        <div>
            
            <h1>All Projects</h1>
            <ProjectForm  />
            <Projects />
        </div>
    )
}

export default ProjectContainer;
