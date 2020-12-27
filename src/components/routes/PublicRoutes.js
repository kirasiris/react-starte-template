import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import HomePage from "../public/HomePage";
import About from "../public/About";
import NotFound from "../layout/NotFound";

const PublicRoutes = () => (
	<Switch>
		<Route exact path={`/about`} component={About} />
		<Route exact path={`/`} component={HomePage} />
		<Route component={NotFound} />
	</Switch>
);

export default connect(null, {})(PublicRoutes);
