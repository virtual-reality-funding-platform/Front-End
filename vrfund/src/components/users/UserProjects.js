import React, { Component } from 'react';
import { connect } from "react-redux";
import UserProject from './UserProject';
import { fetchUsersProjects, deleteProject } from "../../actions";

export class UserProjects extends Component {
    componentDidMount() {
        const id  = localStorage.getItem('userId')
        this.props.fetchUsersProjects(id);
      }

      handlerDelete = (event,id) =>{
        event.preventDefault();
        this.props.deleteProject(id);
    }
      render() {
        return (
          <div>
            {this.props.projectsByUser.map(project => {
              return (
                <UserProject
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


const mapStateToProps = (state )=> {
    return {
        projectsByUser: state.usersProjects,
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchUsersProjects, deleteProject }
  )(UserProjects);