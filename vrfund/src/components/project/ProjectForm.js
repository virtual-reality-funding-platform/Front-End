
import React, { Component } from "react";
import { connect } from "react-redux";
import { addingProject, fetchUsersProjects } from "../../actions";
import { Button, Form } from 'semantic-ui-react';
import styled from "styled-components";


const Wrapper = styled.div`
width: 40%;
margin: 0 auto;
line-height: 30px;
.btn {
  margin: 15px 0
}
`;


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
      <Wrapper>
      <Form>
        <form onSubmit={this.formSubmit}>
        <p>Project Name</p>
        <Form.Group inline>
        <input
          id="projectName"
          onChange={this.handlerChange}
          placeholder="enter project name"
          value={this.state.projectName}
        />
        </Form.Group>
        <p>Project Type</p>
        <Form.Group inline>
        <input
          id="projectType"
          onChange={this.handlerChange}
          placeholder="enter project type"
          value={this.state.projectType}
        />
        </Form.Group>
        
        <p>Description</p>
        <Form.Group inline>
        <input
          id="description"
          onChange={this.handlerChange}
          placeholder="enter the description"
          value={this.state.description}
        />
        </Form.Group>

        <p>Funding Amount</p>
        <Form.Group inline>
        <input
          id="fundingAmount"
          onChange={this.handlerChange}
          placeholder="enter project amount"
          value={this.state.fundingAmount}
        />
        </Form.Group>
        <div>
        <Button>Create Project</Button>
        </div>
      </form>
      </Form>
      </Wrapper>
      
    );
  }
}

export default connect(null, { addingProject, fetchUsersProjects})(ProjectForm);

