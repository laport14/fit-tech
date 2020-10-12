import React, { useState, useEffect } from "react";
import {Link, Route} from "react-router-dom"
import axios from "axios";

function Yoga(props) {
  const [yogaData, setYogaData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/yoga?sort%5B0%5D%5Bfield%5D=date&sort%5B0%5D%5Bdirection%5D=desc`;
      const response = await axios.get(
        airTableURL,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        },
        []
      );

      setYogaData(response.data.records);
    };
    getData();
  }, []);
  return (
    <div className='container'>
      {yogaData.map((yogaData) => (
        <div className='loggedData'>
          <p>Date: {yogaData.fields.date}</p>
          <p>Duration: {yogaData.fields.duration} minutes</p>
          <p>Calories: {yogaData.fields.calories}</p>
          <p>Notes: {yogaData.fields.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default Yoga;