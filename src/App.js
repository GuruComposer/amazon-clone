import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
	"pk_test_51HsaYUJ9UIt1FuaIo7PjVbncRNR3q9UEXw0ryLKtOw8UgydN7EHjZwgFsAn4SqUAzanYKVnOQQa3CyKicmK2I1dV001Ftf39yJ"
);

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		// will only run once when the app component loads...
		auth.onAuthStateChanged((authUser) => {
			console.log("The User Is >>> ", authUser);

			if (authUser) {
				// the user just logged in / the user was logged in.
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		// BEM
		<Router>
			<div className="app">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
