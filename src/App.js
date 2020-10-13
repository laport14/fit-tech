import React from "react";
import { Route, withRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Bike from "./components/Bike";
import Run from "./components/Run";
import Workout from "./components/Workout";
import Yoga from "./components/Yoga";
import CreateLog from "./components/CreateLog";

function App(props) {
  const RunStyle = {
    backgroundImage: `url("https://tinyurl.com/yyjm5gjm")`,
    backgroundSize: `cover`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `fixed`,
  };

  const BikeStyle = {
    backgroundImage: `url("https://tinyurl.com/yycqvmcx")`,
    backgroundSize: `cover`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `fixed`,
  };

  const WorkoutStyle = {
    backgroundImage: `url("https://tinyurl.com/yxf9hq9s")`,
    backgroundSize: `cover`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `fixed`,
  };

  const YogaStyle = {
    backgroundImage: `url("https://tinyurl.com/y5kfxcaa")`,
    backgroundSize: `cover`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `fixed`,
  };

  const CreateStyle = {
    backgroundImage: `url("https://tinyurl.com/yxkvgq83")`,
    backgroundSize: `cover`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `fixed`,
  };

  return (
    <div
      className="App"
      style={
        props.location.pathname === "/run"
          ? RunStyle
          : props.location.pathname === "/bike"
          ? BikeStyle
          : props.location.pathname === "/lift"
          ? WorkoutStyle
          : props.location.pathname === "/yoga"
          ? YogaStyle
          : props.location.pathname === `${props.location.pathname}`
          ? CreateStyle
          : null
      }
    >
      <NavBar />

      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/run">
        <Run />
      </Route>
      <Route exact path="/bike">
        <Bike />
      </Route>
      <Route exact path="/lift">
        <Workout />
      </Route>
      <Route exact path="/yoga">
        <Yoga />
      </Route>

      <Route exact path="/:exercise/create">
        <CreateLog />
      </Route>

      <Footer />
    </div>
  );
}

export default withRouter(App);
