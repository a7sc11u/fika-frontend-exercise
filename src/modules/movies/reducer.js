import produce from 'immer';

import {
  MOVIES_FETCH_START,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_FAIL,
  MOVIES_RESET
} from './types';

import { initialState} from './initial-state';

export const movies = produce((draft = initialState, action) => {
  const { payload } = action;

  console.log(payload)
  switch (action.type) {

    case MOVIES_FETCH_START:
      draft.status = 'loading'
      draft.page = 1;
      break;

    case MOVIES_FETCH_SUCCESS:
      draft.status = 'ready'
      draft.list.push(...payload.results);
      break;

    case MOVIES_FETCH_FAIL:
      draft.status = 'error'
      break;

    case MOVIES_RESET:
      draft.page = 0;
      draft.list = [];
      draft.status = 'initial';
  }

  return draft;
});
