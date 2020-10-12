import React from 'react';
import { Link, Route } from "react-router-dom";


function CreateLogButton(props) {
  return (
    <div>
      <Link to={`/${props.exercise}/create`}>
        <button className="button">Add</button>
      </Link>
      
    </div>
  );
}

export default CreateLogButton;
