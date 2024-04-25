import React, { useState } from "react";
import "./App.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export class MovieSearch extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
        searchValue: "",
        results: [],
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this); 
    this.search = this.search.bind(this);
}

	handleChange = (e) => {
		this.setState({ searchValue: e.target.value });
		this.props.onSearchChange(e.target.value);
	};



	search() {
		fetch(
			`http://www.omdbapi.com/?s=${this.state.searchValue}&apikey=${process.env.OBDM_API_KEY}`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => this.setState({ results: data.Search }))
			.catch((error) => {
				console.error("There was an error!", error);
				this.setState({ error: "There was an error fetching the results." });
			});
	}

	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				className="ontario-search__container"
				noValidate>
				<label
					className="ontario-label ontario-search__label"
					htmlFor="search">
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
						value={this.state.searchValue}
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
				{this.state.error && <p><br />{this.state.error}</p>}
				<script></script>
			</form>
		);
	}
}

class MovieResults extends React.Component {
	render() {
		const { results } = this.props; // access the results from props

		return (
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry>
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
				</Masonry>
			</ResponsiveMasonry>
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

	handleSearchChange = (value) => {
		this.setState({ searchValue: value });
	};

	handleSearchSubmit = async () => {
		const response = await fetch(
			`http://www.omdbapi.com/?s=${this.state.searchValue}&apikey=${process.env.OBDM_API_KEY}`
		);
		const data = await response.json();
		if (data.Search) {
			this.setState({ results: data.Search });
		}
	};

	render() {
		return (
			<div className="ontario-row">
				<div className="ontario-column">
					<h1>Movie Search</h1>
					<MovieSearch
						searchValue={this.state.searchValue}
						onSearchChange={this.handleSearchChange.bind(this)}
						onSearchSubmit={this.handleSearchSubmit.bind(this)}
					/>
					<MovieResults results={this.state.results} />
				</div>{" "}
			</div>
		);
	}
}
