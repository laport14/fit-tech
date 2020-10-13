import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateLogButton from "./CreateLogButton";
import Delete from "./Delete";

function Run(props) {
  const [runData, setRunData] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/run?sort%5B0%5D%5Bfield%5D=date&sort%5B0%5D%5Bdirection%5D=desc`;
      const response = await axios.get(
        airTableURL,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        },
        []
      );

      setRunData(response.data.records);
    };
    getData();
  }, [fetchData]);
  return (
    <div className="container">
      <CreateLogButton exercise="run" />

      {runData.map((runData) => (
        <div className="loggedData" key={runData.id}>
          <p>Date: {runData.fields.date}</p>
          <p>Distance: {runData.fields.distance} miles</p>
          <p>Duration: {runData.fields.duration} minutes</p>
          <p>Calories: {runData.fields.calories}</p>
          <p>Notes: {runData.fields.notes}</p>
          <Delete
            id={runData.id}
            setFetchData={setFetchData}
            fetchData={fetchData}
          />
        </div>
      ))}
    </div>
  );
}

export default Run;
