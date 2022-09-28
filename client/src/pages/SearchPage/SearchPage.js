import React, { useState, useRef, useEffect } from "react";

import Auth from "../../utils/auth.js";
import { Navigate } from "react-router-dom";

import "../../components/SearchBar/SearchBar.css";
import SearchResults from "../../components/SearchResults/SearchResults.js";

function SearchPage() {
	const [searchState, setSearchState] = useState("");
	const ref = useRef(null);

	if (!Auth.loggedIn()) {
		return <Navigate to="/login" />;
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchState(document.querySelector("#search-bar").value);
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<main>
			<section className="heroBg">
				<div display="flex-row justify-center">
					<h1 className="text-center mainTitle">
						<strong>SITE</strong>
						<span>SEER</span>
					</h1>
					<h2 className="text-center margin-top"> A simpler way </h2>
					<h2 className="text-center">to camp</h2>
				</div>
				<form className="top-margin flex-row formPadding justify-center">
					<div className="flex-row justify-space-between col-10 col-xl-6 col-lg-6 col-md-8 col-sm-8">
						<input
							type="text"
							placeholder="Find a New Adventure"
							name="search"
							id="search-bar"
							className="col-12 col-sm-8"
						/>
						<div className="col-auto">
							<button
								type="submit"
								id="search-btn"
								className="btn btn-long col-auto"
								onClick={handleSubmit}
							>
								Search
							</button>
						</div>
					</div>
					<h3 className="text-center margin-top col-12 font-larger">
						find campsites near you
					</h3>
				</form>
				<div ref={ref}>.</div>
			</section>

			<section>
				<SearchResults searchState={searchState}></SearchResults>
			</section>

		</main>
	);
}

export default SearchPage;
