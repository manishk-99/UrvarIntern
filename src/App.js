import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "./styles.css";
export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
}
