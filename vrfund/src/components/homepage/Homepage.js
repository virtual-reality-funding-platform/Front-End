
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions";

export class Homepage extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    return (
      <div className="home-projects-list">
        <h1>Homepage where users get to see all projects</h1>

        <br/>
        <br/>

        {this.props.projectsList.map(project => {
          return (
            <div key={project.id}>
              <h3>Name: {project.projectName} </h3><br/>
              Type: {project.projectType} <br/>
              Description: {project.description} <br/>
              Fund Amount: {project.fundingAmount} <br/><br/>
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
