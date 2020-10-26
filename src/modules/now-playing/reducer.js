import produce from 'immer';

import {
  MOVIES_NOW_PLAYING_FETCH_START,
  MOVIES_NOW_PLAYING_FETCH_SUCCESS,
  MOVIES_NOW_PLAYING_FETCH_FAIL,
  MOVIES_NOW_PLAYING_RESET
} from './types';

import { initialState} from './initial-state';

export const nowPlaying = produce((draft = initialState, action) => {
  const { payload } = action;

  switch (action.type) {

    case MOVIES_NOW_PLAYING_FETCH_START:
      draft.status = 'loading'
      draft.page = 1;
      break;

    case MOVIES_NOW_PLAYING_FETCH_SUCCESS:
      draft.status = 'ready'
      draft.movies = payload.results
      break;

    case MOVIES_NOW_PLAYING_FETCH_FAIL:
      draft.status = 'error'
      break;

    case MOVIES_NOW_PLAYING_RESET:
      draft.page = 0;
      draft.movies = [];
      draft.status = 'initial';
  }

  return draft;
});
