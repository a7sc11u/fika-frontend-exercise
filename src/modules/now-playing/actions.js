import {
  MOVIES_NOW_PLAYING_FETCH_START,
  MOVIES_NOW_PLAYING_FETCH_SUCCESS,
  MOVIES_NOW_PLAYING_FETCH_FAIL,
  MOVIES_NOW_PLAYING_RESET
} from './types';

/**
 * Fetch Initial Movies
 */
export const fetchMovies = () => async (dispatch, getState, { tmdb }) => {
  // reset data;
  dispatch(resetMovies());
  dispatch(fetchNextPage());
};

/**
 * Fetch Next Page
 */
export const fetchNextPage = () => async (dispatch, getState, { tmdb }) => {
  // get next page by current state
  // fetch next page
  const nextPage = getState().nowPlaying.page + 1;
  dispatch(fetchMovieByPage(nextPage));
};


/**
 * Fetch Movies by Page
 */
const fetchMovieByPage = (fetchPage) => async (dispatch, getState, { tmdb }) => {
  // start
  dispatch(fetchMovieStart());

  try {
    // use tmdb service
    const { results, page, total_pages }  = await tmdb.moviesFetchNowPlaying({ page:fetchPage });
    // set success
    dispatch(fetchMoviesSuccess(results, page, total_pages))
  } catch (error) { 
    // catch error
    dispatch(fetchMoviesError(error))
  }
};

/**
 * Fetch Start
 */
const fetchMovieStart = () => {
  return {
    type: MOVIES_NOW_PLAYING_FETCH_START,
  };
}

/**
 * Fetch Success
 */
const fetchMoviesSuccess = (results, page, totalPages) => {
  return {
    type: MOVIES_NOW_PLAYING_FETCH_SUCCESS,
    payload: { results, page, totalPages },
  };
}

/**
 * Fetch Error
 */
const fetchMoviesError = () => {
  return {
    type: MOVIES_NOW_PLAYING_FETCH_FAIL,
  };
}

/**
 * Reset State
 */
export const resetMovies = () => {
  return {
    type: MOVIES_NOW_PLAYING_RESET,
  };
}

