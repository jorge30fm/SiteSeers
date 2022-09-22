import React from "react";
import "./SearchBar.css";
function SearchBar(props) {
	const { setSearchState } = props;

	// submit form
	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchState(document.querySelector("#search-bar").value);
	};

	return (
		<section className="heroBg">
			<div display="flex-row justify-center">
				<h1 className="text-center mainTitle"><strong>SITE</strong><span>SEER</span></h1>
				<h2 className="text-center margin-top"> A simpler way </h2>
				<h2 className="text-center">to camp</h2>
			</div>
			<form className="top-margin flex-row formPadding">
				<input
					type="text"
					placeholder="Find a New Adventure"
					name="search"
					id="search-bar"
				/>
				<div>
					<button
						type="submit"
						id="search-btn"
						className="btn btn-long"
						onClick={handleSubmit}
					>
						Search
					</button>
				</div>
				<h3 className="text-center margin-top col-12 font-larger">find campsites near you</h3>
			</form>
		</section>
	);
}

export default SearchBar;
