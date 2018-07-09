import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Patients from "./components/Patients/Patients";
import Stats from "./components/Stats/Stats";

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/patients" component={Patients} />
        <Route path="/stats" component={Stats} />
        <Redirect to="/patients" />
      </Switch>
    );

    return <Layout>{routes}</Layout>;
  }
}

export default App;
