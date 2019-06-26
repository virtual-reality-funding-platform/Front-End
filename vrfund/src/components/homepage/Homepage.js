import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions";

export class Homepage extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    return (
      <div>
        <h1>Home page where users get to see all projects</h1>

        {this.props.projectsList.map(project => {
          return (
            <div key={project.id}>
              project Name: {project.projectName} <br/>
              Type: {project.projectType} <br/>
              Description: {project.description} <br/>
              Fund Amount: {project.fundingAmount} <br/>
            </div>
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
  { fetchProjects }
)(Homepage);
