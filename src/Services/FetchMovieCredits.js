import fetchInfo from "./fetchInfo.json";

const FetchMovieCredits = (id) => {
  return fetch(
    `${fetchInfo.URL}/movie/${id}/credits?api_key=${fetchInfo.KEY}&language=en-US`
  ).then((res) => res.json());
};

export default FetchMovieCredits;
