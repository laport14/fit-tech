import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function WorkoutGif(props) {
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${props.match.params.exercise}&api_key=8G7kE0PWuusFBW7K07znBsaK7WOa25Co&limit=25`
      );
      setGifData(response.data.data[0].images.downsized.url);
    };
    getData();
  });
  return (
    <div>
      <img
        alt="workout-gif"
        className="giphy"
        src={gifData}
        height="300px"
        width="350px"
      />
    </div>
  );
}

export default withRouter(WorkoutGif);
