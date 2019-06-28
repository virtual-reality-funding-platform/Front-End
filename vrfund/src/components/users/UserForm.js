import React, { Component } from "react";
import { connect } from "react-redux";
import { addingUser } from "../../actions";
import { Button, Checkbox, Form } from "semantic-ui-react";
import styled from "styled-components";
// import image from '../../images/small.jpg'

const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  margin:  0 0 6rem 0;
  color: black;
  width: 100%;



  .text{
    width: 50%; 
    display: flex;
    text-align: center;
    font-size: 3rem;
    line-height: 4rem;
    margin: 10rem 1rem;
    h2 {

    }
  }

  .registration {
    width: 50%;
    padding: 4rem 12rem 0 12rem;
  }
`;
export class UserForm extends Component {
  nameRef = React.createRef();
  aboutRef = React.createRef();
  usernameRef = React.createRef();
  passwordRef = React.createRef();

  onAddUser = () => {
    this.props.addingUser({
      name: this.nameRef.current.value,
      about: this.aboutRef.current.value,
      username: this.usernameRef.current.value,
      password: this.passwordRef.current.value
    });
    this.nameRef.current.value = "";
    this.aboutRef.current.value = "";
    this.usernameRef.current.value = "";
    this.passwordRef.current.value = "";
  };

  render() {
    return (
      <Section>
        <div className="text"> 
        <div>  We're  here for you, you just <strong>build</strong>,  you <strong>pitch</strong>, and we provide the fund to <strong>grow </strong>and <strong>scale</strong> your idea. <br/>
         <Button primary>Log In</Button>
 </div>
        </div>
        <section className="registration">
        <h4>Create your account to get started!</h4>
          <Form>
            <Form.Field>
            <em>Name</em>
              <input ref={this.nameRef} type="text" placeholder=" enter your name"/>
            </Form.Field>

            <Form.Field>
            <em>About</em>
              <input ref={this.aboutRef} type="text" placeholder="tell us about you or your team"/>
            </Form.Field>

            <Form.Field>
            <em>Username</em>
              <input ref={this.usernameRef} type="text"  placeholder="enter your username" />
            </Form.Field>

            <Form.Field>
              <em>Password</em>
              <input ref={this.passwordRef} type="text" placeholder="enter your password"/>
            </Form.Field>

            <Form.Field>
              <em>Confirm Password</em>
              <input ref={this.passwordRef} type="text" placeholder="confirm your username"/>
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button basic color='blue' onClick={this.onAddUser}>Get Started!</Button>
          </Form>
        </section>
      </Section>
    );
  }
}

export default connect(
  null,
  { addingUser }
)(UserForm);
