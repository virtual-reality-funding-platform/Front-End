import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UserForm from "../Users/UserForm";
import styled from "styled-components";
import { Card, Icon } from 'semantic-ui-react'


const Wrapper = styled.section`
width: 100%;

`;

export class Homepage extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <div>

          </div>
          <div>
            <UserForm />
          </div>
        </Wrapper>

        <div className="home-projects-list">
          {this.props.projectsList.map(project => {
            return (
              <Card >
              <div key={project.id}>
                <Card.Content><h3>{project.projectName} </h3></Card.Content>
                <br />
                <Card.Content><em>Types</em> <strong>{project.projectType}</strong> <br /></Card.Content>
                <Card.Content>Description: <strong>{project.description}</strong></Card.Content><br />
                <Card.Content>                Fund Amount: <strong>{project.fundingAmount}</strong> <br />
</Card.Content>
                <br />
              </div>
              </Card>
              
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
