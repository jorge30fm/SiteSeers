import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Login from "./pages/Login/Login.js";
import SignUp from "./pages/SignUp/SignUp.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import ReserveSite from "./pages/ReserveSite/ReserveSite.js";
import SearchPage from "./pages/SearchPage/SearchPage.js";
import SingleSite from "./pages/SingleSite/SingleSite.js";
import PayConfirm from "./pages/PayConfirm/PayConfirm.js";
import ReserveDetails from "./pages/ReserveDetails/ReserveDetails.js";
import TermsOfService from "./pages/Policies/TermsService.js";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy.js";
import CancelConfirm from "./pages/CancelConfirm/CancelConfirm.js";
import AddListing from "./pages/AddListing/AddListing.js";
import EditProfile from "./pages/EditProfile/EditProfile.js";
import NotFound from "./pages/NotFound/NotFound.js";

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
						<Route path="/edit-account" element={<EditProfile />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
