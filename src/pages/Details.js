import React, { Component } from "react";
import PropTypes from "prop-types";

const API_KEY = "7ccc0697";

export class Details extends Component {
  static propTypes = {
    id: PropTypes.string
  };

  state = { movie: {} };

  _fetchMovie({ id }) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
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
        <div className="buttons has-addons is-left back">
          <button className="button btn-back" onClick={this._goBack}>
            <span className="icon back-button">
              <i className="fas fa-space-shuttle"></i>
            </span>
            <span>Go back</span>
          </button>
        </div>
        <section className="hero is-medium is-bold hero-details">
          <div className="hero-body ">
            <div className="container">
              <h1 className="title">
              {Title}
              </h1>
              <img src={Poster} alt={Title} />
              <br></br>
              <span className="icon actors">
                <i className="fas fa-star"></i>
              </span>
              <h2 className="subtitle">
              {Actors}
              </h2>
              <span className="icon history">
                <i className="fas fa-history"></i>
              </span>
              <p className="description">{Plot}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
