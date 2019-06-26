
import React from "react";


const Project = props => {
  return (
    <div>
      <div>
        <strong>{props.data.projectName}</strong> <br />
        <strong>{props.data.projectType}</strong> <br />
        <strong>{props.data.description}</strong> <br />
        <strong>{props.data.fundingAmount}</strong>
      </div>
      <div>
        <button onClick={(event)=>{props.handlerDelete(event,props.data.id)}}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Project;
