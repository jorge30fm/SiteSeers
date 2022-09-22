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
import Dashboard from "./pages/Dashboard/Dashboard";
import ReserveSite from "./pages/ReserveSite/ReserveSite";
import SearchPage from "./pages/SearchPage/SearchPage";
import SingleSite from "./pages/SingleSite/SingleSite";
import PayConfirm from "./pages/PayConfirm/PayConfirm";
import ReserveDetails from "./pages/ReserveDetails/ReserveDetails";
import TermsOfService from "./pages/Policies/TermsService";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import CancelConfirm from "./pages/CancelConfirm/CancelConfirm";
import AddListing from "./pages/AddListing/AddListing";
import AccountEdit from "./pages/AccountEdit/Accountedit";
import NotFound from "./pages/NotFound/NotFound";

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
						<Route path="/" element={<Dashboard />} />
						<Route path="/search" element={<SearchPage />} />
						<Route path="/single-site/:id" element={<SingleSite />} />
						<Route path="/reserve/:id" element={<ReserveSite />} />
						<Route path="/pay-confirm/:id" element={<PayConfirm />} />
						<Route path="/reservation-details/:id" element={<ReserveDetails />} />
						<Route path="/terms-of-service" element={<TermsOfService />} />
						<Route path="/privacy-policy" element={<PrivacyPolicy />} />
						<Route path="/cancel-confirm" element={<CancelConfirm />} />
						<Route path="/add-listing" element={<AddListing />} />
						<Route path="/edit-account" element={<AccountEdit />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
