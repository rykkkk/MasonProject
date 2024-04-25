import React, { useState } from "react";
import "./App.css";
import { Output } from "./Output";

export function MovieSearch({ onSearchChange, searchValue }) {
	// const [searchValue, setSearchValue] = useState("");
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		// setSearchValue(e.target.value);
		onSearchChange(e.target.value);
	};

	const search = () => {
		//   fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.OBDM_API_KEY}`)
		fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=72936f33`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				if (data.Search) {
					setResults(data.Search);
				} else {
					setResults([]);
					setError("No results found.");
				}
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<form onSubmit={search} className="ontario-search__container" noValidate>
			<label className="ontario-label ontario-search__label" htmlFor="search">
				Search titles
			</label>
			<p className="ontario-hint">
				Search the OMDB database for a Movie or TV Program.
			</p>
			<div className="ontario-search__input-container">
				<input
					type="search"
					name="search"
					id="search"
					autocomplete="off"
					className="ontario-input ontario-search__input"
					placeholder="Search for a movie"
					value={searchValue}
					onChange={handleChange}
				/>
				<input
					className="ontario-search__reset"
					id="search-reset-button"
					type="reset"
					value=""
					aria-label="Clear field"
				/>
				<button
					className="ontario-search__submit"
					id="search-submit-button"
					type="submit">
					<span className="ontario-show-for-sr">Search</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none">
						<path
							fill="#000"
							d="M15.5 14h-.8l-.28-.27A6.47 6.47 0 0016 9.5a6.5 6.5 0 10-13 0A6.5 6.5 0 009.5 16a6.47 6.47 0 004.23-1.57l.27.28v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"></path>
					</svg>
				</button>
			</div>{" "}
			{error && (
				<p>
					<br />
					{error}
				</p>
			)}
			<Output results={results} />
			<script></script>
		</form>
	);
}
