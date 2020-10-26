const apiKey = "d432b933ecc6d5642d8d2befbc40c7ac"

/**
 * TMDB Service
 */
class TMDB {

  /**
   * Fetch Movie Genres
   */
  moviesFetchGenres = () => {
    return this.fetch({
      query: `genre/movie/list`
    })
  }

  /**
   * Fetch Now Playing Movies
   */
  moviesFetchNowPlaying = ({page}) => {
    return this.fetch({
      query: `movie/now_playing`,
      page
    })
  }

  /**
   * Generic Fetch
   */
  fetch = ({ 
    version='3',
    query='', 
    page='1', 
    language="en-US" 
  } = {}) => {
  
    // collect query params
    const queryParams = [
      `api_key=${apiKey}`,
      `language=${language}`,
      `page=${page}`,
    ];
  
    // base api url
    const apiUrl = `https://api.themoviedb.org/${version}/${query}`;
  
    // fetch movies
    // return a promise, to avoid handling the result promise 
    // returned by fetch api.
    return new Promise((resolve, reject) => {
      fetch(
        `${apiUrl}?${queryParams.join('&')}`,
        { method : 'GET' },
      )
      .then(res => res.json())
      .then(response => {
        response.error ?
          reject(response) :
          resolve(response);
      });
    });
  };
  
}


export const tmdb = new TMDB() 
