import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';


import { fetchGenres } from '../modules/genres';
import { fetchMoviesNowPlaying } from '../modules/now-playing';

import { MovieList } from '../components/movie-list';


const MoviesContainer = ({ 
  hasRequiredData, 
  fetchMoviesNowPlaying,
  fetchGenres, 
  nowPlaying 
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

  const {page: moviesPage, status: moviesStatus} = state.nowPlaying
  const { status : genresStatus } = state.genres;

  const hasMoviesData = moviesPage > 0 || moviesStatus === 'ready';
  const hasGenresData = genresStatus === 'ready'
  const hasRequiredData = hasGenresData && hasMoviesData;

  return {
    hasRequiredData: hasRequiredData,
    nowPlaying: state.nowPlaying.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMoviesNowPlaying: () => dispatch(fetchMoviesNowPlaying()),
  };
}

export const MoviesScreen = connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

