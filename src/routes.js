import * as React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import SinglePhoto from "./components/SinglePhoto";

export const routes = (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/view/:postId" component={SinglePhoto} />
    {/* <Route component={Notfound} /> */}
  </Switch>
);
