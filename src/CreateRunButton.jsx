import React from 'react';
import { Link, Route } from "react-router-dom";


function CreateRunButton(props) {
  return (
    <div>
      <Link to="/run/CreateRun">
        <button className="button">Add A Run!</button>
      </Link>
      
    </div>
  );
}

export default CreateRunButton;
