import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';



export class Login extends React.Component {
  userRef = React.createRef();
  passRef = React.createRef();

  onLogin = () => {
    const username = this.userRef.current.value;
    const password = this.passRef.current.value;
    this.props.login(username, password, this.props);
  }
  render() {
    return (
      <MDBContainer>
      <MDBRow center>
        <MDBCol md="5">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your username"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                ref={this.userRef}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                ref={this.passRef}
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={this.onLogin}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


        // original code
      // <div>
      //   <h3>Login</h3>
      //   <div>username <input type="text" ref={this.userRef} /></div>
      //   <div>password <input type="text" ref={this.passRef} /></div>

      //   <button onClick={this.onLogin}>Log in</button>
      // </div>
    );
  }
}

export default connect(
  state => state,
  { login },
)(Login);
