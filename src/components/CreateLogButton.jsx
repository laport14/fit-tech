import React from "react";
import { Link, withRouter } from "react-router-dom";

function CreateLogButton(props) {
  return (
    <div>
      <Link to={`/${props.exercise}/create`}>
        <button className="button">{`log your ${props.exercise} session!`}</button>
      </Link>
    </div>
  );
}

export default withRouter(CreateLogButton);
