import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"

function Run(props) {
  const [runData, setRunData] = useState([]);

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
  }, []);
  return (
    <div className='container'>
      {runData.map((runData) => (
        <div className='loggedData'>
          <p>Date: {runData.fields.date}</p>
          <p>Distance: {runData.fields.distance} miles</p>
          <p>Duration: {runData.fields.duration} minutes</p>
          <p>Calories: {runData.fields.calories}</p>
        </div>
      ))}
    </div>
  );
}

export default Run;
