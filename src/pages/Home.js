import React, {Component} from 'react'
import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList";
import NotFound from "../components/NotFound";


export class Home extends Component {
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
    render () {
        return (
            <div>
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
        )
    }
}