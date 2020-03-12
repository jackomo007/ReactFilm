import React, { Component } from "react";
import { Title } from "./components/Title";
import SearchForm from "./components/SearchForm";
import { Details } from "./pages/Details";
import { MoviesList } from "./components/MoviesList";
import NotFound from "./components/NotFound";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = { usedSearch: false, results: [] };

  _handleResults = results => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults() {
    return this.state.results.length === 0 ? (
      <NotFound />
    ) : (
      <MoviesList movies={this.state.results} />
    );
  }

  render() {
    const url = new URL(document.location);
    const hasId = url.searchParams.has("id");
    const getId = url.searchParams.get("id");

    if (hasId) {
      return <Details id={getId} />;
    }
    return (
      <div className="App">
        <Title>"Movie Searcher"</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>Use the form to search a movie.</small>
        )}
      </div>
    );
  }
}

export default App;
