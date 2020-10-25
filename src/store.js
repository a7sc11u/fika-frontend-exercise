import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { tmdb } from './services/tmdb';
import { genres } from './modules/genres';
import { movies } from './modules/movies';

/**
 * Co Store
 */
const configureStore = () => {
  
  // combine reducers
  const rootReducer = combineReducers({
    genres,
    movies,
  });

  // configure middleware
  const middleware = applyMiddleware(
      thunk.withExtraArgument({
        api: {
          tmdb
        }
      }),
      logger
    )

   // create store
   const store = createStore(
    rootReducer,
    middleware
  );

  return store;
}

// store singleton
export const store = configureStore();
