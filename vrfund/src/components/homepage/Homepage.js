import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions";
import NavBar from "./NavBar";
import Footer from "./Footer";
import UserForm from "../users/UserForm";
import styled from "styled-components";
import { Card } from 'semantic-ui-react'


const Wrapper = styled.section`
width: 100%;

`;

const ProjectList = styled.div`
display: flex;
justify-content: space-evenly;

ProjectList {
  width: 33%;
  padding: 0 3rem;
  margin: 1rem 2rem;
}

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

        <ProjectList className="home-project-list">
          {this.props.projectsList.map(project => {
            return (
              <Card >
              <div  className="project-list" key={project.id}>
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
        </ProjectList>
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
