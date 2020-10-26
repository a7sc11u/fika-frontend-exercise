import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { tmdb } from './services/tmdb';
import { genres, nowPlaying } from './modules';

/**
 * Configure Store
 */
const configureStore = () => {
  
  // combine reducers
  const rootReducer = combineReducers({
    genres,
    nowPlaying,
  });

  // configure middleware
  const middleware = applyMiddleware(
    thunk.withExtraArgument({
      tmdb
    }),
    logger
  );

  // create store
  const store = createStore(
    rootReducer,
    middleware
  );

  return store;
}

// store singleton
export const store = configureStore();
