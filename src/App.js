import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";
import Signup from "./component/signup";
import Result from "./component/result";
import Candidate from "./component/candidate";
import Admin from "./component/admin";
import ModifyParty from "./component/modifyParty";


export default function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/view-result" component={Result} />
        <Route exact path="/candidate" component={Candidate} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/edit_party" component={ModifyParty} />
      </Switch>
    </div>
  );
}
