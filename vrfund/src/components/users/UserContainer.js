import React, { Component } from "react";
import NavBar from "./NavBar";
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
        <ProjectForm />
        <Route
          path="/"
          render={props => {
            return <UserProjects />;
          }}
        />
        <Route path="/projects/edit/:id" component={EditProjects} />
      </>
    );
  }
}

export default UserContainer;
