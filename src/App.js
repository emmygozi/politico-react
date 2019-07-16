import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";


export default function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}
