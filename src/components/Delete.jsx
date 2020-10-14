import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function Delete(props) {
  const handleDelete = async () => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}${props.match.path}/${props.id}`;
    await axios.delete(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    props.setFetchData(!props.fetchData);
  };

  return (
    <div>
      <img
        className="delete-button"
        alt="delete-button"
        src="https://tinyurl.com/y2r48w4r"
        onClick={handleDelete}
        width="20px"
        height="20px"
      />
    </div>
  );
}

export default withRouter(Delete);
