// import React, { Component } from 'react'
// import axiosImproved from '../../axios';

// export class DeleteForm extends Component {
//     state = {
//         projectName: '',
//         projectType:'',
//         description: '',
//         fundingAmount: ''
//     }

//     onSubmit = e => {
//         e.preventDefault();
//         this.props.deleteProject(this.props.match.params.id);
//         this.props.history.push('/');
//       }

//       componentDidMount() {
//           const { match, history } = this.props;

//           axiosImproved().get(`https://vrfp.herokuapp.com/projects`)
//           .then(res => {
//             console.log('deleteForm', res.data)

//             const project = res.data.filter(project => (
//               project.id.toString() === match.params.id)
//             );
    
//             if (project.length > 0) {
//               this.setState({
//                 projectName: project[0].projectName,
//                 projectType: project[0].projectType,
//                 description: project[0].description,
//                 fundingAmount: project[0].fundingAmount,
//               })
//             } else {
//               window.alert(`Your project with id ${match.params.id} is not found!`)
//               history.push('/')
//             }
//           })


//       }
//     render() {
//         const { projectName, projectType, description, fundingAmount} = this.state;
//         const { history } = this.props;
//         return (
//             <div class="alert">
//                 <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
//                 <div>{projectName}</div>
//                 <div>{projectType}</div>
//                 <div>{description}</div>
//                 <div>{fundingAmount}</div>
//             <button onClick={ () => {history.push('/')} }>
//                 Cancel
//             </button>
//             <button onClick={this.onSubmit}>
//                 Remove
//             </button>
//             </div>
//         )
//     }
// }

// export default DeleteForm
