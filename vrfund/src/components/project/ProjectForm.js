
import React, { Component } from "react";
import { connect } from "react-redux";
import { addingProject, fetchUsersProjects } from "../../actions";

export class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      projectName: "",
      projectType: "",
      description: "",
      fundingAmount: "",
      user_id: ""
    };
  }

  componentDidMount() {
    const id  = localStorage.getItem('userId')
    this.setState({
      user_id: id,
    });
  }

  handlerChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  formSubmit = event => {
    event.preventDefault();
    this.props.addingProject({
      projectName: this.state.projectName,
      projectType: this.state.projectType,
      description: this.state.description,
      fundingAmount: this.state.fundingAmount,
      user_id: this.state.user_id
    });
    this.setState({
      projectName: "",
      projectType: "",
      description: "",
      fundingAmount: "",
      user_id:""
    });
  };
  
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <p>Project Name</p>
        <input
          id="projectName"
          onChange={this.handlerChange}
          placeholder="enter project name"
          value={this.state.projectName}
        />
        <p>Project Type</p>
        <input
          id="projectType"
          onChange={this.handlerChange}
          placeholder="enter project type"
          value={this.state.projectType}
        />
        <p>Description</p>
        <input
          id="description"
          onChange={this.handlerChange}
          placeholder="enter the description"
          value={this.state.description}
        />
         <p>Funding Amount</p>
        <input
          id="fundingAmount"
          onChange={this.handlerChange}
          placeholder="enter project amount"
          value={this.state.fundingAmount}
        />
        <button>Create Project</button>
      </form>
    );
  }
}

export default connect(null, { addingProject, fetchUsersProjects})(ProjectForm);

