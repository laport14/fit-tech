import React, { useState, useEffect } from "react";
import axios from "axios";

function Run(props) {
  const [runData, setRunData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/run`;
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
    <div>
      {runData.map((runData) => (
        <div>
          <p>{runData.fields.duration}</p>
        </div>
      ))}
    </div>
  );
}

export default Run;
