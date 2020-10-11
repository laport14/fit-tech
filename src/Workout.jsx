import React, { useState, useEffect } from "react";
import axios from "axios";

function Workout(props) {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/lift?sort%5B0%5D%5Bfield%5D=date&sort%5B0%5D%5Bdirection%5D=desc`;
      const response = await axios.get(
        airTableURL,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        },
        []
      );

      setWorkoutData(response.data.records);
    };
    getData();
  }, []);
  return (
    <div className='container'>
      {workoutData.map((workoutData) => (
        <div className='loggedData'>
          <p>Date: {workoutData.fields.date}</p>
          <p>Duration: {workoutData.fields.duration} minutes</p>
          <p>Calories: {workoutData.fields.calories}</p>
          <p>Notes: {workoutData.fields.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default Workout;