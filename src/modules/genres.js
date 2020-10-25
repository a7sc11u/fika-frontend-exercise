import produce from 'immer';

const SET_GENRES = 'GET_GENRES';

export function setGenres(genres) {
  return {
    type: SET_GENRES,
    payload: { genres },
  };
}

const initialState = {
  list: {},
};

export const genres = produce((state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {

    case SET_GENRES:
      state.list = payload.genres;
      break;
  }

  return state;
});
