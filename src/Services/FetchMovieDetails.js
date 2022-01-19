import fetchInfo from "./fetchInfo.json";

const FetchMovieDetails = (id) => {
  return fetch(
    `${fetchInfo.URL}/movie/${id}?api_key=${fetchInfo.KEY}&language=en-US`
  ).then((res) => res.json());
};

export default FetchMovieDetails;
