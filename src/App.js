import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Hero from "./components/Hero";
import Features from "./components/Features";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Hero />
        <Features />
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
