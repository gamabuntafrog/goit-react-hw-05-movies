import fetchInfo from "./fetchInfo.json";

const FetchMovieByQuery = (params) => {
  return fetch(
    `${fetchInfo.URL}/search/movie?api_key=${fetchInfo.KEY}&language=en-US&query=${params}&page=1&include_adult=false`
  ).then((res) => res.json());
};

export default FetchMovieByQuery;
