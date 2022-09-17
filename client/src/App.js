import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ReserveSite from "./pages/ReserveSite/ReserveSite";
import SearchResults from "./pages/SearchResults/SearchResults";
import Dashboard from "./pages/Dashboard/Dashboard";
import SingleSite from "./pages/SingleSite/SingleSite";
import PayConfirm from "./pages/PayConfirm/PayConfirm";
import ReserveDetails from "./pages/ReserveDetails/ReserveDetails";
import TermsOfService from "./pages/Policies/TermsService";

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app-container">
      <ApolloProvider client={client}>
        <Router>
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Header>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/single-site" element={<SingleSite />} />
            <Route path="/reserve" element={<ReserveSite />} />
            <Route path="/pay-confirm" element={<PayConfirm />} />
            <Route path="/reservation-details" element={<ReserveDetails />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
