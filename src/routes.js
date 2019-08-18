import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./components/Home";
import SinglePhoto from "./components/SinglePhoto";

export const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/view/:postId" component={SinglePhoto} />
      {/* <Route component={Notfound} /> */}
    </Switch>
  </Router>
);
