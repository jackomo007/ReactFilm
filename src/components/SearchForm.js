import React, { Component } from "react";

const API_KEY = "7ccc0697";

export class SearchForm extends Component {
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
              placeholder="Movie name..."
              onChange={this._handleChange}
            />
          </div>
          <div className="control">
            <button className="button search">
            <span className="icon">
            <i className="fas fa-rocket"></i>
          </span>
          <span>Beam me up scotty!</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}