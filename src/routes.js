import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import SinglePhoto from "./components/SinglePhoto";

export const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/view/:postId" component={SinglePhoto} />
      {/* <Route component={Notfound} /> */}
    </Switch>
);
