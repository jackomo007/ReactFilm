import React, { Component } from "react";
import PropTypes from "prop-types";

const API_KEY = "7ccc0697";

export class Details extends Component {
  static propTypes = {
    id: PropTypes.string
  };

  state = { movie: {} };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(movie => {
        this.setState({ movie });
      });
  }

  _goBack() {
    window.history.back();
  }

  componentDidMount() {
    const { id } = this.props;
    this._fetchMovie({ id });
  }
  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <button className="button btn-back" onClick={this._goBack}>
          <span className="icon back-button">
            <i className="fas fa-space-shuttle"></i>
          </span>
          <span>Go back</span>
        </button>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}
