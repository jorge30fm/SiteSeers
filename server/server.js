// imports
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { authMiddleware } from "./utils/auth.js";
import path from "path";
import { URL } from "url";
// import { createRequire } from 'node:module';
import { typeDefs, resolvers } from "./schemas/index.js";
import db from "./config/connection.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

const app = express();

const __filename = new URL("../client/build/index.html", import.meta.url)
	.pathname;

console.log("this is filename ", __filename);
const __dirname = path.dirname(__filename);
console.log("This is __dirname >>>", __dirname);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();
	server.applyMiddleware({ app });

	if (process.env.NODE_ENV === "production") {
		app.use(express.static(path.dirname(__filename)));
	}
	app.get("/*", (req, res) => {
		res.sendFile(path.dirname(__dirname, __filename));
	});
	db.once("open", () => {
		app.listen(PORT, () => {
			console.log(`API server running on port ${PORT}!`);
			console.log(
				`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
			);
		});
	});
};
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
