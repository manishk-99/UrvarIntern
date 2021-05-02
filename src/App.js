import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Help2 from "./Help2";
import Privacy2 from "./Privacy2";
import Certification2 from "./Certification2";
import Supply2 from "./Supply2";
import Demand2 from "./Demand2";
import "./styles.css";
export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Help2" exact component={Help2} />
          <Route path="/Privacy2" exact component={Privacy2} />
          <Route path="/Certification2" exact component={Certification2} />
          <Route path="/Supply2" exact component={Supply2} />
          <Route path="/Demand2" exact component={Demand2} />
        </Switch>
      </div>
    </HashRouter>
  );
}
