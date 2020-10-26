import {
  MOVIES_FETCH_START,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_FAIL,
  MOVIES_RESET
} from './types';


/**
 * Fetch Initial Movies
 */
export const fetchMoviesInitial = () => async (dispatch, getState, { tmdb }) => {
  // reset data;
  dispatch(reset());
  dispatch(fetchMoviesNextPage());
};

/**
 * Fetch Next Page
 */
export const fetchMoviesNextPage = () => async (dispatch, getState, { tmdb }) => {
  // get next page by current state
  const nextPage = getState().movies.page + 1;
  // fetch next page
  dispatch(fetchMoviesByPage(nextPage))
};


/**
 * Fetch Movies by Page
 */
const fetchMoviesByPage = (page) => async (dispatch, getState, { tmdb }) => {

  // start
  dispatch(fetchMoviesStart);
  
  try {
    // use tmdb service
    const { results } = await tmdb.moviesFetchNowPlaying({ page });
    // set success
    dispatch(fetchMoviesSuccess(results, page))
  } catch (error) { 
    // catch error
    dispatch(fetchMoviesError(error))
  }
};

/**
 * Fetch Start
 */
const fetchMoviesStart = () => {
  return {
    type: MOVIES_FETCH_START,
  };
}

/**
 * Fetch Success
 */
const fetchMoviesSuccess = (results, page) => {
  return {
    type: MOVIES_FETCH_SUCCESS,
    payload: { results, page },
  };
}

/**
 * Fetch Error
 */
const fetchMoviesError = () => {
  return {
    type: MOVIES_FETCH_FAIL,
  };
}

/**
 * Reset State
 */
export const reset = () => {
  return {
    type: MOVIES_RESET,
  };
}

