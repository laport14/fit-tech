import React from 'react';
import {Link, Route} from "react-router-dom"
import HomePage from "./HomePage"
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <NavBar />
      </Route>
      <Route path="/Home">
        <HomePage />
      </Route>
      <Route path="/">
        <Footer />
      </Route>
    </div>
  );
}

export default App;
