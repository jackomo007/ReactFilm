import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  };

  render() {
    const { id, poster, title, year } = this.props;

    return (
      <a href={`?id=${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img src={poster === "N/A" ? "/lost-404.jpg" : poster} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4 white">{title}</p>
              <p className="subtitle is-6 green">{year}</p>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
