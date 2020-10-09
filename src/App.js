import React from 'react';
import {Link, Route} from "react-router-dom"
import HomePage from "./HomePage"
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import Bike from './Bike'
import Run from './Run'
import Workout from './Workout'
import Yoga from "./Yoga"

function App() {
  return (
    <div className="App">
      
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
      
        <Footer />
      
    </div>
  );
}

export default App;
