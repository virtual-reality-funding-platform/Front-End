import React, { Component } from 'react'
import Project from './Project';
import { connect } from 'react-redux';
import { fetchProjects, deleteProject, editProject } from "../../actions";


export class Projects extends Component {
    componentDidMount() {
        this.props.fetchProjects();
      }
    render() {
        return (
            <div>
                {
                    this.props.projectsList.map(project => {
                       return <Project key={project.id}  data={project}  handlerDelete={this.props.deleteProject} handlerEdit={this.props.editProject}/>
                    })
                }
            </div>
                
        )
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
