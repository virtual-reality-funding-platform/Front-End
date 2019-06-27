import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions";
import NavBar from './NavBar';
import Footer from './Footer';
import UserForm from '../../components/Users/UserForm';
export class Homepage extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <UserForm />
        </div>
        <div className="home-projects-list">
          {this.props.projectsList.map(project => {
            return (
              <div key={project.id}>
                <h3>{project.projectName} </h3>
                <br />
                Type: {project.projectType} <br />
                Description: {project.description} <br />
                Fund Amount: {project.fundingAmount} <br />
                <br />
              </div>
            );
          })}
        </div>
        <Footer />
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
