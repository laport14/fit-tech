import React, { useState } from "react";
import axios from "axios";

function CreateRun(props) {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      date,
      distance,
      duration,
      calories
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/run`;
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
    setCalories("")
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
          placeholder="distance in miles"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <label htmlFor="duration">Duration:</label>
        <input
          name="duration"
          type="text"
          placeholder="total run time"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
         <label htmlFor="calories">Calories:</label>
        <input
          name="calories"
          type="text"
          placeholder="calories burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <button type="submit">Log Your Run!</button>
      </form>
    </div>
  );
}

export default CreateRun;
