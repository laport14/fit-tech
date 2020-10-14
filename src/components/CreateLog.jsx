import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function CreateLog(props) {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      date,
      distance,
      duration,
      calories,
      notes: notes ? notes : "no input logged",
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${props.match.params.exercise}`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    //need this here to rerender the page so that the input displays on the page without that page having to be reloaded
    // props.setFetchUserPost(!props.fetchUserPost);
    setDate("");
    setDistance("");
    setDuration("");
    setCalories("");
    setNotes("");
    //looking at the history and pushing back to the respective log page after submit
    props.history.push(`/${props.match.params.exercise}`);
  };

  return (
    <div className="create-run">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          name="date"
          type="date"
          placeholder="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="distance">Distance:</label>
        <input
          name="distance"
          type="text"
          placeholder="Distance in Miles"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <label htmlFor="duration">Duration:</label>
        <input
          name="duration"
          type="text"
          placeholder="Log Duration if Applicable"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <label htmlFor="calories">Calories:</label>
        <input
          name="calories"
          type="text"
          placeholder="Calories Burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <label htmlFor="notes">Notes:</label>
        <textarea
          className="text-box"
          name="notes"
          type="text"
          placeholder="Log Your Notes Here"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button className="form-submit" type="submit">
          Log Your Hard Work!
        </button>
      </form>
    </div>
  );
}

export default withRouter(CreateLog);
