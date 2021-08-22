import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <div>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/"></Route>
                    <Route path="/dashboard">
                        {localStorage.getItem("user") ? (
                            <Dashboard />
                        ) : (
                            <Redirect to="/" />
                        )}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
