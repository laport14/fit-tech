import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Bike from "./components/Bike";
import Run from "./components/Run";
import Workout from "./components/Workout";
import Yoga from "./components/Yoga";
import CreateRun from "./components/CreateRun";

function App(props) {
  const RunStyle = {
    backgroundImage: `url("https://tinyurl.com/y3jebo5s")`,
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

  return (
    <div
      className="App"
      style={
        props.location.pathname === "/run"
          ? RunStyle
          : props.location.pathname === "/bike"
          ? BikeStyle
          : props.location.pathname === "/workout"
          ? WorkoutStyle
          : props.location.pathname === "/yoga"
          ? YogaStyle
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
      <Route exact path="/workout">
        <Workout />
      </Route>
      <Route exact path="/yoga">
        <Yoga />
      </Route>

      <Route exact path="/:exercise/create">
        <CreateRun />
      </Route>

      <Footer />
    </div>
  );
}

export default withRouter(App);
