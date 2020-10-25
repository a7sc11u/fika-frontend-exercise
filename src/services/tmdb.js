const apiKey = "d432b933ecc6d5642d8d2befbc40c7ac"

/**
 * TMDB Service
 */
export const tmdb = ({ 
  version='3',
  query='movie/now_playing', 
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


