import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateLogButton from "./CreateLogButton";
import Delete from "./Delete"

function Yoga(props) {
  const [yogaData, setYogaData] = useState([]);
  const [fetchData, setFetchData] = useState(false)

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
  }, [fetchData]);
  return (
    <div className='container'>

      <CreateLogButton exercise="yoga" />
      
      {yogaData.map((yogaData) => (
        <div className='loggedData' key={yogaData.id}>
          <p>Date: {yogaData.fields.date}</p>
          <p>Duration: {yogaData.fields.duration} minutes</p>
          <p>Calories: {yogaData.fields.calories}</p>
          <p>Notes: {yogaData.fields.notes}</p>
          <Delete id={yogaData.id} setFetchData={setFetchData} />
        </div>
      ))}
    </div>
  );
}

export default Yoga;