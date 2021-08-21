import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Recipe from "./pages/Recipe";


const App = () => {
    return (
        <div>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/"></Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/recipe">
                        <Recipe />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
