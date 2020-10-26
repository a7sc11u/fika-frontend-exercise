import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchGenres } from '../modules/genres';
import { 
  nowPlayingMovies, 
  fetchMoviesNowPlaying
} from '../modules/now-playing';

import { MovieListView } from '../components/movie-list';

const MoviesContainer = ({ 
  nowPlaying, 
  fetchMoviesNowPlaying,
  fetchGenres, 
}) => {
  
  useEffect(() => {
    fetchGenres()
  }, [])

  useEffect(() => {
    fetchMoviesNowPlaying()
  }, [])

  return nowPlaying ? (<MovieListView movies={nowPlaying} />) : null;
}

function mapStateToProps(state) {
  return {
    nowPlaying: nowPlayingMovies(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMoviesNowPlaying: () => dispatch(fetchMoviesNowPlaying()),
  };
}

export const MoviesScreen = connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

