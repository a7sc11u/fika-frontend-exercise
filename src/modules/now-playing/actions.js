import {
  MOVIES_NOW_PLAYING_FETCH_START,
  MOVIES_NOW_PLAYING_FETCH_SUCCESS,
  MOVIES_NOW_PLAYING_FETCH_FAIL,
  MOVIES_NOW_PLAYING_RESET
} from './types';

/**
 * Fetch Initial Movies
 */
export const fetchMoviesNowPlaying = () => async (dispatch, getState, { tmdb }) => {
  // reset data;
  dispatch(resetNowPlaying());
  dispatch(fetchMoviesNowPlayingNextPage());
};

/**
 * Fetch Next Page
 */
export const fetchMoviesNowPlayingNextPage = () => async (dispatch, getState, { tmdb }) => {
  // get next page by current state
  const nextPage = getState().nowPlaying.page + 1;
  // fetch next page
  dispatch(fetchMoviesNowPlayingByPage(nextPage))
};


/**
 * Fetch Movies by Page
 */
const fetchMoviesNowPlayingByPage = (page) => async (dispatch, getState, { tmdb }) => {
  // start
  dispatch(fetchMoviesNowPlayingStart());
  
  try {
    // use tmdb service
    const { results, page, totalPages } = await tmdb.moviesFetchNowPlaying({ page });
    // set success
    dispatch(fetchMoviesNowPlayingSuccess(results, page))
  } catch (error) { 
    // catch error
    dispatch(fetchMoviesNowPlayingError(error))
  }
};

/**
 * Fetch Start
 */
const fetchMoviesNowPlayingStart = () => {
  return {
    type: MOVIES_NOW_PLAYING_FETCH_START,
  };
}

/**
 * Fetch Success
 */
const fetchMoviesNowPlayingSuccess = (results, page) => {
  return {
    type: MOVIES_NOW_PLAYING_FETCH_SUCCESS,
    payload: { results, page },
  };
}

/**
 * Fetch Error
 */
const fetchMoviesNowPlayingError = () => {
  return {
    type: MOVIES_NOW_PLAYING_FETCH_FAIL,
  };
}

/**
 * Reset State
 */
export const resetNowPlaying = () => {
  return {
    type: MOVIES_NOW_PLAYING_RESET,
  };
}

