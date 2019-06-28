import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Button, Form } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import styled from "styled-components";


const Wrapper = styled.div`
width: 50%;
padding: 8rem 0 18rem  0 ;
margin: 0 auto;
line-height: 30px;
.btn {
  margin: 15px 0
}
`;

export class Login extends React.Component {
  // constructor(props) {
  //   super(props);
    
  // }
  
  userRef = React.createRef();
  passRef = React.createRef();

  onLogin = () => {
    const username = this.userRef.current.value;
    const password = this.passRef.current.value;
    this.props.login(username, password, this.props);
  }
  render() {
    return (
      <Container>
      <Wrapper>
      <Form>
      <div>Welcome back! <h3>Login</h3></div>
      <div>
      <Form.Field>
      <div>username <input type="text" ref={this.userRef} placeholder="username"/></div>
    </Form.Field>
    <Form.Field>      <div>password <input type="password" ref={this.passRef} placeholder="password" /></div>
</Form.Field>
      </div>

      <div className="btn">
      <Button primary onClick={this.onLogin}> Log in </Button>
      </div>
      </Form>
      </Wrapper>
      </Container>
    );
  }
}

export default connect(
  state => state,
  { login },
)(Login);
