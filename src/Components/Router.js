import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "Components/Header";
import Logout from "Components/Logout";
import Home from "Pages/Home";
import Battle from "Pages/Battle";
import NewBattle from "Pages/NewBattle";
import CurrentEvent from "Pages/CurrentEvent";
import RandomTeam from "Pages/RandomTeam";
import Login from "Pages/Login";

export default ({ authenticate, handleLogin, handleLogout }) => (
  <Router>
    <>
      <Header authenticate={authenticate} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/battle" exact component={Battle} />
        <Route path="/currentEvent" exact component={CurrentEvent} />
        <Route path="/randomTeam" exact component={RandomTeam} />
        <Route
          path="/login"
          exact
          render={() => <Login handleLogin={handleLogin} />}
        />
        <Route
          path="/logout"
          exact
          render={() => <Logout handleLogout={handleLogout} />}
        />
        <Route
          path="/newBattle"
          exact
          render={() => <NewBattle authenticate={authenticate} />}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
