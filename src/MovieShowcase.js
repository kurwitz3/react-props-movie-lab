import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
   movieData.map(movie => <li>{movie.title}</li>,
    <li>{movie.IMBDRating}</li>,
    <li>{movie.genres}</li>,
    <li>{movie.poster}</li>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
