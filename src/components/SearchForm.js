import React, { Component } from "react";

const API_KEY = "7ccc0697";

class SearchForm extends Component {
  state = { inputMovie: "" };

  _handleChange = e => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { inputMovie } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(response => response.json())
      .then(results => {
        const { Search = [], totalResults = "0" } = results;
        console.log(Search, totalResults);
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Find a movie"
              onChange={this._handleChange}
            />
          </div>
          <div className="control">
            <button className="button is-info">Search Movies</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;
