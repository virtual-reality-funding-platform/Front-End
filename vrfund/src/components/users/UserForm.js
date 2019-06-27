import React, { Component } from 'react'
import { connect } from "react-redux";
import { addingUser } from "../../actions";
export class UserForm extends Component {
    nameRef = React.createRef()
    aboutRef = React.createRef()
    usernameRef = React.createRef()
    passwordRef = React.createRef()

    onAddUser = () => {
      this.props.addingUser({
        name: this.nameRef.current.value,
        about: this.aboutRef.current.value,
        username: this.usernameRef.current.value,
        password: this.passwordRef.current.value,
      });
      this.nameRef.current.value = '';
      this.aboutRef.current.value = '';
      this.usernameRef.current.value = '';
      this.passwordRef.current.value = '';
    }

    render() {
        return (
            <div>
              <div><em>Name</em>
              <input ref={this.nameRef} type="text" />
              </div>

              <div><em>About</em>
              <input ref={this.aboutRef} type="text" />
              </div>

              <div><em>Username</em>
              <input ref={this.usernameRef} type="text" />
              </div>

              <div><em>Password</em>
              <input ref={this.passwordRef} type="text" />
              </div>

              <div>
              <button onClick={this.onAddUser}>Add user</button>

              </div>

            </div>
        )
    }
}

export default connect(null, { addingUser})(UserForm);

