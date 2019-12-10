import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Navbar from "./navbar";
import NotFound from "./not.found";
import Home from "./home";

/**
 * This component handles routing for the the application
 */
export const Index = () => {
    return (
      <Router>
        <div className="index">
          <Navbar />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
}

export default Index;