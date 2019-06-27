import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAUser } from "../../actions";
export class User extends Component {
  componentDidMount() {
    const id = localStorage.getItem("userId");
    this.props.fetchAUser(id);
  }

  render() {
    console.log('props',this.props);
    console.log('props user',this.props.user);
    return (
      <div>
            <div>
            <strong>User details</strong>
              <div>{this.props.user.username}</div> 
              <div>{this.props.user.name}</div>
              <div>{this.props.user.about}</div> <br/>
            </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { fetchAUser }
)(User);
