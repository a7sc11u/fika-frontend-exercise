import { 
  createStore as createReduxStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { tmdb } from './services/tmdb';
import { genres } from './modules/genres';
import { movies } from './modules/movies';

/**
 * Create Store
 */
export const configureStore = () => {
  
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
   const store = createReduxStore(
    rootReducer,
    middleware
  );

  return store;
}
