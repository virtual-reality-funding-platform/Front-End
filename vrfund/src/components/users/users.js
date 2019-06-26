
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchUser } from "../../actions";
// import User from '../../actions';
// export class Users extends Component {
//     componentDidMount() {
//         this.props.fetchUser();
//       }
//     render() {
//         return (
//             <div>
//                  {
//                     this.props.user.map(user => {
//                         return <User key={user.id} data={user} />
//                     })
//                 }
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//       user: state.users
//     };
//   };
  
//   export default connect(
//     mapStateToProps,
//     { fetchUser }
//   )(Users);
