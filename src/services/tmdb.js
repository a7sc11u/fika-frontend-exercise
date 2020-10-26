const apiKey = "d432b933ecc6d5642d8d2befbc40c7ac"

/**
 * TMDB Service
 */
class TMDB {

  moviesFetchGenres = () => {
    return this.fetch({
      query: `genre/movie/list`
    })
  }

  moviesFetchNowPlaying = ({page}) => {
    return this.fetch({
      query: `movie/now_playing`,
      page
    })
  }

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
