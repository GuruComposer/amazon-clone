const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51HsaYUJ9UIt1FuaIxKkv0Lrz3edab8FuIbdqygoqflKQXIeSOvAqQE2WTtjYM7n6ukk1HSMjbKpmL8HC4tOV4X8K00LT9N2l8x"
);

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("Hello, world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Received!!!", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of currency
		currency: "usd",
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-41556/us-central1/api
