import React, { Component } from "react";
import NavBar from "./Nav";
import { Route } from "react-router-dom";
import UserProjects from "./UserProjects";
import EditProjects from "./EditProjects";
import ProjectForm from "../project/ProjectForm";
import User from "./User";

export class UserContainer extends Component {
  render() {
    return (
      <>
        <NavBar />
        <User />
        
        <Route
          path="/"
          render={props => {
            return <UserProjects {...props} />;
          }}
        />
        <ProjectForm />
        <Route  path="/projects/edit/:id" component={EditProjects} />
      </>
    );
  }
}

export default UserContainer;
