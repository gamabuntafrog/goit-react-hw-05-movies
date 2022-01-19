import fetchInfo from "./fetchInfo.json";

const FetchMovieReviews = (id) => {
  return fetch(
    `${fetchInfo.URL}/movie/${id}/reviews?api_key=${fetchInfo.KEY}&language=en-US&page=1`
  ).then((res) => res.json());
};

export default FetchMovieReviews;
