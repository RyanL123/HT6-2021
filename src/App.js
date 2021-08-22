import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";

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
          <Route path="/recipe">
              <Recipe />
          </Route>
          <Route path="/search">
              <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
