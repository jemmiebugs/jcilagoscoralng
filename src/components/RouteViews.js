import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OtherPages from "../pages/OtherPages";

const RouteViews = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:links" component={OtherPages} />
        </Switch>
      </main>
    </div>
  );
};
export default RouteViews;
