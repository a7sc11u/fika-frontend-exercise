import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { HUES } from '../constants/design-tokens';

import { fetchGenres } from '../modules/genres';
import { fetchMoviesInitial, fetchMoviesNextPage } from '../modules/movies';


const MoviesView = ({ 
  hasRequiredData, 
  fetchMoviesInitial,
  fetchMoviesNextPage, 
  fetchGenres, 
  movies 
}) => {
  
  useEffect(() => {
    fetchGenres()
  }, [])

  useEffect(() => {
    fetchMoviesInitial()
  }, [])

  console.log('LENGTH', movies.length);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: HUES.BG_PAGE,
      }}
    >
      {hasRequiredData && movies.map(mov => (
        <Text
          style={{
            color: "black",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {mov.title}
        </Text>
      ))}
    </View>
  );
}

function mapStateToProps(state) {

  const {page: moviesPage, status: moviesStatus} = state.movies
  const { status : genresStatus } = state.genres;

  const hasMoviesData = moviesPage > 0 || moviesStatus === 'ready';
  const hasGenresData = genresStatus === 'ready'
  const hasRequiredData = hasGenresData && hasMoviesData;

  return {
    hasRequiredData: hasRequiredData,
    movies: state.movies.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMoviesInitial: () => dispatch(fetchMoviesInitial()),
    fetchMoviesNextPage: () => dispatch(fetchMoviesNextPage()),
  };
}

export const MoviesScreen = connect(mapStateToProps, mapDispatchToProps)(MoviesView);

