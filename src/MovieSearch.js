import React, { useState } from "react";
export class MovieSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = { search: "" };
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.addSearchResetOnClickListener("search-reset-button", "search");
		this.addResetButtonOnSearchInputListener("search-reset-button", "search");
	}

	handleChange(event) {
		this.setState({ search: event.target.value });
	}

	search(e) {
		e.preventDefault();
		fetch(`http://www.omdbapi.com/?apikey=4a249f8f&s=${this.state.search}`)
			.then((res) => res.json())
			.then((data) => {
				const results = data.Search;
				this.setState({ results });
			});
	}

	render() {
		return (
			<div>
				<form
					// action
					// name="searchForm"
					// id=" search-form"
					onsubmit={this.search}
					class="ontario-search__container"
					novalidate>
					<label class="ontario-label ontario-search__label" for=" search">
						Search titles
					</label>
					<p id=" search-hint" class="ontario-hint">
						Search the OMDB database for a Movie or TV Program.
					</p>
					<div class="ontario-search__input-container">
						<input
							type="search"
							name="search"
							id=" search"
							aria-autocomplete="none"
							className="ontario-input ontario-search__input"
							placeholder="Search for a movie"
							onChange={this.handleChange}
							value={this.state.search}
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
					<script></script>
				</form>
			</div>
		);
	}
}


export const MovieResults = () => {
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);

    // rest of your code
}