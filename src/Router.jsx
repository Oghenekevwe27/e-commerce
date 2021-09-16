import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage"
import Landingpage from "./pages/Landingpage";
import ReviewPage from "./pages/ReviewPage";



const RoutesComp = () => {
	return (
		<Router>
			<Switch>
			<Route path="/" exact>
              
              <Landingpage/>
            </Route>
				<Route path="/reviewpage">
				<ReviewPage/>
				</Route>

				<Route path="/cart">
				<Cart/>
				</Route>
				
			</Switch>
		</Router>
	);
};

export default RoutesComp;