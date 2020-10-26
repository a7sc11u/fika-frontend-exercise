import produce from 'immer';

import {
  GENRES_FETCH_START,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_FAIL
} from './types';

import { initialState} from './initial-state';

export const genres = produce((draft = initialState, action) => {
  const { payload } = action;

  
  switch (action.type) {
    
    case GENRES_FETCH_START:
      draft.status = 'loading'
      break;
      
      case GENRES_FETCH_SUCCESS:
      draft.status = 'ready'
      draft.list = payload.results;
      break;

    case GENRES_FETCH_FAIL:
      draft.status = 'error'
      break;
  }

  return draft;
});