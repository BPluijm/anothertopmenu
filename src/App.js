import React from 'react';
import NavBar from "./components/NavBar";
import {Switch, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

// npm install styled-components
// npm install react-router-dom react-icons


function App() {
  return (
      <>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/Service" exact component={Service} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/sign-in" exact component={SignIn} />
          </Switch>
      </>
  );
}

export default App;
