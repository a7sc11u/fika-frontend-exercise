import produce from 'immer';

const SET_MOVIES = 'SET_MOVIES';

export function setMovies(movies) {
  return {
    type: SET_MOVIES,
    payload: { movies },
  };
}

const initialState = {
  movies: {},
};

export const movies = produce((state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {

    case SET_MOVIES:
      state.movies = payload.movies;
      break;
  }

  return state;
});
