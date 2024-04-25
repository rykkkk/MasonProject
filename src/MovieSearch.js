import React, { useState } from "react";

export class MovieSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			results: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.search = this.search.bind(this);
	}

	handleChange(e) {
		this.setState({ search: e.target.value });
		this.props.onSearchChange(e.target.value);
	}
	fetchMovies = async () => {
		const response = await fetch(
			`http://www.omdbapi.com/?s=${this.state.searchValue}&apikey=${process.env.OBDM_API_KEY}`
		);
		const data = await response.json();
		if (data.Search) {
			this.setState({ results: data.Search });
			this.props.onSearchSubmit(data.Search); // pass the results to the parent component
		}
	};

	search(e) {
		e.preventDefault();
		this.fetchMovies();
	}
	render() {
		return (
			<form
				onsubmit={this.search}
				className="ontario-search__container"
				novalidate>
				<label class="ontario-label ontario-search__label" htmlFor=" search">
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
						value={this.state.search}
						onChange={this.handleChange}
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
		);
	}
}

class MovieResults extends React.Component {
    render() {
        const { results } = this.props; // access the results from props

        return (
            <div className="mason-container">
                {results.map((result) => (
                    <div key={result.imdbID}>
                        <ul className="ontario-card__container ontario-card--cards-per-row-3">
                            <li className="ontario-card ontario-card--light ontario-card--no-description ontario-card--position-vertical  ">
                                <div className="ontario-card__image-container">
                                    <img
                                        className="ontario-card__image"
                                        src={result.Poster}
                                        alt="card component image"></img>
                                </div>
                                <div className="ontario-card__text-container ontario-card--image-true">
                                    <h2 className="ontario-card__heading">
                                        <a href="#">{result.Title}</a> <p>{result.Year}</p>
                                    </h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}
export class Output extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: "",
			results: [],
		};
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	handleSearchChange(event) {
		this.setState({ searchValue: event.target.value });
	}

	handleSearchSubmit(results) {
		this.setState({ results });
	}

	render() {
		return (
			<div className="ontario-row">
				<div className="ontario-column">
					<h1>Movie Search</h1>
					<MovieSearch
						searchValue={this.state.searchValue}
						onSearchChange={this.handleSearchChange}
						onSearchSubmit={this.handleSearchSubmit}
					/>
					<MovieResults results={this.state.results} />
				</div>{" "}
			</div>
		);
	}
}
