import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { fetchGenres } from '../modules/genres';
import { 
  nowPlayingMovies, 
  fetchMovies,
  fetchNextPage,
} from '../modules/now-playing';

import { MovieListView } from '../components/movie-list';

const MoviesContainer = ({ 
  page,
  fetching,
  nowPlaying, 
  fetchMovies,
  fetchNextPage,
  fetchGenres, 
}) => {
  
  useEffect(() => {
    fetchGenres();
    fetchMovies();
  }, [])

  const handleLoadMoreMovies = useCallback(() => {
    if(!fetching) {
      fetchNextPage();
    }
  }, [fetching]);

  return nowPlaying ? (
    <MovieListView 
      movies={nowPlaying} 
      page={page}
      onLoadMore={handleLoadMoreMovies} 
    />
  ) : null;
}

function mapStateToProps(state) {
  return {
    page: state.nowPlaying.page,
    fetching: state.nowPlaying.state === 'fetching',
    nowPlaying: nowPlayingMovies(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMovies: () => dispatch(fetchMovies()),
    fetchNextPage: () => dispatch(fetchNextPage()),
  };
}

export const MoviesScreen = connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

