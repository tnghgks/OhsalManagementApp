import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from "Components/Header";
import Home from "Pages/Home";
import Battle from "Pages/Battle";
import CurrentEvent from "Pages/CurrentEvent";
import RandomTeam from "Pages/RandomTeam";

export default () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/battle" exact component={Battle} />
				<Route path="/currentEvent" exact component={CurrentEvent} />
				<Route path="/randomTeam" exact component={RandomTeam} />
				<Redirect from="*" to="/"/>
			</Switch>
		</>
	</Router>
)