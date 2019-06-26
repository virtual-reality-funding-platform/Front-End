
import React, { Component } from "react";
import Project from "./Project";
import { connect } from "react-redux";
import { fetchProjects, deleteProject, editProject } from "../../actions";

export class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  handlerDelete = (event, id) => {
    event.preventDefault();
    this.props.deleteProject(id);
  };
  render() {
    return (
      <div>
        {this.props.projectsList.map(project => {
          return (
            <Project
              key={project.id}
              data={project}
              handlerDelete={this.handlerDelete}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    projectsList: state.projects
  };
};

export default connect(
  mapStateToProps,
  { fetchProjects, deleteProject, editProject }
)(Projects);
