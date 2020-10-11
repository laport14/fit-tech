import React, { useState, useEffect } from "react";
import axios from "axios";

function Bike(props) {
  const [bikeData, setBikeData] = useState([]);

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
  }, []);
  return (
    <div className='container'>
      {bikeData.map((bikeData) => (
        <div className='loggedData'>
          <p>{bikeData.fields.date}</p>
          <p>Distance: {bikeData.fields.distance} miles</p>
          <p>Duration: {bikeData.fields.duration} minutes</p>
          <p>Calories: {bikeData.fields.calories}</p>
        </div>
      ))}
    </div>
  );
}

export default Bike;