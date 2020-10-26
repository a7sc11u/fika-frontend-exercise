import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { HUES } from '../constants/design-tokens';

import { fetchGenres } from '../modules/genres';
import { fetchMoviesNowPlaying } from '../modules/now-playing';


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

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: HUES.BG_PAGE,
      }}
    >
      {hasRequiredData && nowPlaying.map(mov => (
        <Text
          key={mov.id}
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

