import React, { useState, useEffect } from "react";
import {Link, Route} from "react-router-dom"
import axios from "axios";
import CreateLogButton from "./CreateLogButton";
import Delete from "./Delete"

function Bike(props) {
  const [bikeData, setBikeData] = useState([]);
  const [fetchData, setFetchData] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/bike?sort%5B0%5D%5Bfield%5D=date&sort%5B0%5D%5Bdirection%5D=desc`;
      const response = await axios.get(
        airTableURL,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        },
        []
      );

      setBikeData(response.data.records);
    };
    getData();
  }, [fetchData]);
  return (
    <div className='container'>

    <CreateLogButton exercise="bike"/>

      {bikeData.map((bikeData) => (
        <div className='loggedData' key={bikeData.id}>
          <p>Date: {bikeData.fields.date}</p>
          <p>Distance: {bikeData.fields.distance} miles</p>
          <p>Duration: {bikeData.fields.duration} minutes</p>
          <p>Calories: {bikeData.fields.calories}</p>
          <p>Notes: {bikeData.fields.notes}</p>
          <Delete id={bikeData.id} setFetchData={setFetchData} />
        </div>
      ))}
    </div>
  );
}

export default Bike;