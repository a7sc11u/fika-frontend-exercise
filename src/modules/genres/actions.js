import {
  GENRES_FETCH_START,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_FAIL
} from './types';

/**
 * fetchGenres
 * async thunk to fetch genres
 */
export const fetchGenres = () => async (dispatch, getState, { tmdb }) => {

  // set status to start
  dispatch(fetchGenresStart())

  try {
    const { genres } = await tmdb.moviesFetchGenres();
    dispatch(fetchGenresSuccess(genres))
  } catch (error) { 
    dispatch(fetchGenresError(error))
  }
};

/**
 * Fetch Start
 */
function fetchGenresStart() {
  return {
    type: GENRES_FETCH_START,
  };
}

/** 
 * Fetch Success
 */
function fetchGenresSuccess(results) {
  return {
    type: GENRES_FETCH_SUCCESS,
    payload: { results },
  };
}

/**
 * Fetch Fail
 */
function fetchGenresError() {
  return {
    type: GENRES_FETCH_FAIL,
  };
}
