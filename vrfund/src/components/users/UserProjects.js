import React, { Component } from 'react';
import { connect } from "react-redux";
import UserProject from './UserProject';
import { fetchUsersProjects, deleteProject } from "../../actions";

export class UserProjects extends Component {
    componentDidMount() {
        const id  = localStorage.getItem('userId')
        this.props.fetchUsersProjects(id);
      }
      render() {
        return (
          <div>
            {this.props.userProject.map(project => {
              return (
                <UserProject
                  key={project.id}
                  data={project}
                  deleteProject={this.deleteProject}
                />
              );
            })}
          </div>
        );
      }
}


const mapStateToProps = (state )=> {
    return {
        userProject: state.projects
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchUsersProjects, deleteProject }
  )(UserProjects);