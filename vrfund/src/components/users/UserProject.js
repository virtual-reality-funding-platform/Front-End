import React, { Component } from "react";
import { deleteProject } from "../../actions";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';



export class UserProject extends Component {
  render() {
    return (
      <div>
        <div>
          <strong>{this.props.data.projectName}</strong> <br />
          <strong>{this.props.data.projectType}</strong> <br />
          <strong>{this.props.data.description}</strong> <br />
          <strong>{this.props.data.fundingAmount}</strong> <br/>
          <button onClick={(event)=>{this.props.deleteProject(event, this.props.data.id)}}>Delete</button>
        </div>
        <div>
        <Link to={`/projects/edit/${this.props.data.id}`}>Edit</Link>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                      
      </div>
    );
  }
}


// export default UserProject;


const mapStateToProps = (state )=> {
    return {
        userProject: state.projects
    };
  };
  
  export default connect(
    mapStateToProps,
    { deleteProject }
  ) (UserProject);