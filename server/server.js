// imports
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { authMiddleware } from "./utils/auth.js";
import path from "path";
import {fileURLToPath} from 'url';
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
const __filename = fileURLToPath(import.meta.url);
console.log (__filename)
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
console.log(path.join(__dirname, '/dist', 'index.html'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets 
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

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
