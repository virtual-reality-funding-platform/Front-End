import React, { Component } from 'react'
import NavBar from './NavBar';
import { Route } from "react-router-dom";
import UserProjects from './UserProjects';
import UserProjectForm from './UserProjectForm';
import EditProjects from './EditProjects';
import ProjectForm from '../project/ProjectForm'

 
export class UserContainer extends Component {
    render() {
        return (
            <>
              <NavBar />
              <ProjectForm />
              <Route
                path="/"
                render={props => {
                  return (
                    <UserProjects
                    />
                  );
                }}
              />
      
              <Route
                path="projects/add"
                render={props => (
                  <UserProjectForm />
                )}
              />
      
      <Route exact path='/projects/edit/:id' component={EditProjects}></Route>

            </>
          );
    }
}

export default UserContainer;
