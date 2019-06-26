import React from "react";
import { editProject } from "../actions/index";
import { connect } from "react-redux";

class ProjectEdit extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      id: this.props.id,
      projectName: this.props.project.projectName,
      projectType: this.props.project.projectType,
      description: this.props.project.description,
      fundingAmount: this.props.project.fundingAmount
    };
  }
  handleFieldChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  formSubmit(event) {
    event.preventDefault();
    this.props.editSmurf(this.state.Id, {
      projectName: this.state.projectName,
      projectType: this.state.projectType,
      description: this.state.description,
      fundingAmount: this.state.fundingAmount
    });
    this.setState({
      Id: "",
      projectName: "",
      projectType: "",
      description: "",
      fundingAmount: ""
    });
    this.props.history.push("/");
  }
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <p>Name</p>
        <input
          id="projectName"
          onChange={this.handleFieldChange}
          placeholder="enter project name"
          value={this.state.projectName}
        />
        <p>Project Type</p>
        <input
          id=" projectType"
          onChange={this.handleFieldChange}
          placeholder="enter project type"
          value={this.state.projectType}
        />
        <p>Project Description</p>
        <input
          id="description"
          onChange={this.handleFieldChange}
          placeholder="enter project description"
          value={this.state.description}
        />
        <p>Project Amount</p>
        <input
          id="fundingAmount"
          onChange={this.handleFieldChange}
          placeholder="enter funding amount"
          value={this.state.fundingAmount}
        />
        <button>save</button>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    project:
      state.projects.find(project => ownProps.match.params.id == project.id) ||
      null
  };
};

export default connect(
  mapStateToProps,
  { editProject }
)(ProjectEdit);
