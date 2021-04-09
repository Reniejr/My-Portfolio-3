import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//UTILITIES

//PERSONAL COMPONENTS IMPORTS
import HomePage from "../../_PAGES/0.HomePage/HomePage";

//STYLE IMPORTS
import "./RouterWeb.scss";

export default function RouterWeb() {
  return (
    <div id="router-web">
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}
