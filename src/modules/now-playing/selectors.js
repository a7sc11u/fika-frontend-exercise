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
 * 
 */
export const nowPlayingMovies = createSelector(
  getNowPlayingMovies,
  getGenre,
  (movies, genres) => {  
    
    return movies.map(movie => {
      return {
        ...movie,
        genres: movie.genre_ids.map(gid => genres[gid])
      }
    });
  }
)

/**
 * 
 */
export const hasRequiredData = createSelector(
  hasMoviesData,
  hasGenresData,
  (hasMoviesData, hasGenresData) => {  
    return hasGenresData && hasMoviesData;
  }
)

