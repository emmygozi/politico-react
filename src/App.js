import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home";


export default function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
