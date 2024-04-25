import React, { useState } from "react";
import { MovieSearch } from "./MovieSearch";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function Output() {
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const handleSearchChange = (value) => {
      setSearchValue(value);
    };
  
    const handleSearchSubmit = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.OBDM_API_KEY}`
        );
        const data = await response.json();
        if (data.Search) {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      } catch (error) {
        setError("There was an error fetching the results.");
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="ontario-row">
        <div className="ontario-column">
          <h1>Movie Search</h1>
          <MovieSearch
            searchValue={searchValue}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
            results={results}
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : results.length > 0 ? (
            <MovieResults results={results} />
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    );
  }

export function MovieResults({ results }) {
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
  