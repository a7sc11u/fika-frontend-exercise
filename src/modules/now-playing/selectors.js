import { createSelector } from 'reselect'

/**
 * getNowPlayingMovies
 */
const getNowPlayingMovies = state => state.nowPlaying.movies;

/**
 * getGenre
 */
const getGenre = state => state.genres.list

/**
 * hasMoviesData
 */
const hasMoviesData = state => state.nowPlaying.page > 0;

/**
 * hasGenresData
 */
const hasGenresData = state => state.genres.status === 'ready';


/**
 * Selector to determine if movies and genres are loader
 */
export const hasRequiredData = createSelector(
  hasMoviesData,
  hasGenresData,
  (hasMoviesData, hasGenresData) => {  
    return hasGenresData && hasMoviesData;
  }
)


/**
 * Select now playing movies, with 
 */
export const nowPlayingMovies = createSelector(
  hasRequiredData,
  getNowPlayingMovies,
  getGenre,
  (hasData, movies, genres) => {  
    return !hasData ? null : movies.map(movie => {
      return {
        ...movie,
        genres: movie.genre_ids.map(gid => genres[gid])
      }
    });
  }
)


