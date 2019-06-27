import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { 
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';



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

      <Grid centered columns={2}>
        <Grid.Column>
            <Header as="h2" textAlign="center">
                Login
            </Header>
            <Segment>
                <Form size="large">
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                        type="text"
                        ref={this.userRef}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        ref={this.passRef}
                    />
                    <Button color="green" fluid size="large" onClick={this.onLogin}>
                        Login
                    </Button>
                </Form>
            </Segment>
            <Message>
                Not registered yet? <a href="##">Sign Up</a>
            </Message>
        </Grid.Column>
      </Grid>






      // <div>
      //   <h3>Login</h3>
      //   <div>username <input type="text" ref={this.userRef} /></div>
      //   <div>password <input type="password" ref={this.passRef} /></div>

      //   <button onClick={this.onLogin}>Log in</button>
      // </div>
    );
  }
}

export default connect(
  state => state,
  { login },
)(Login);
