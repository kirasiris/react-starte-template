import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PublicRoutes from "./components/routes/PublicRoutes";

import store from "./store";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/js/javascript.js";
import "./App.css";

const Public = ({ match }) => <Route component={PublicRoutes} />;

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path={`/`} component={Public} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
