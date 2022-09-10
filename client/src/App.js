
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";
import {setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: "/graphql",
});
const authLink = setContext((_, {headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Hi</h1>
      </header>
    </div>
  );
}

export default App;
