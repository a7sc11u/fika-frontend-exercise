import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchGenres } from '../modules/genres';
import { 
  nowPlayingMovies, 
  hasRequiredData, 
  fetchMoviesNowPlaying
} from '../modules/now-playing';

import { MovieList } from '../components/movie-list';


const MoviesContainer = ({ 
  hasRequiredData, 
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

  return hasRequiredData ? (<MovieList movies={nowPlaying} />) : null;
}

function mapStateToProps(state) {
  return {
    hasRequiredData: hasRequiredData(state),
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

