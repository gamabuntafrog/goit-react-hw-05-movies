import { useRouteMatch, NavLink, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import FetchMovieDetails from "../../Services/FetchMovieDetails";
import Cast from "../Cast";
import Reviews from "../Reviews";

const MovieDetailsPage = () => {
  const [film, setFilm] = useState("");
  const { params, url } = useRouteMatch();

  useEffect(() => {
    FetchMovieDetails(params.movieId).then((data) => {
      setFilm(data);
    });
  }, []);

  if (film.id) {
    return (
      <div
        className="movie-details"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${film.backdrop_path})`,
        }}
      >
        <div className="blur">
          <div className="movie-details-left">
            {film.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.original_title}
              />
            ) : (
              <div
                style={{
                  width: "550px",
                  height: "740px",
                  backgroundColor: "black",
                }}
              >
                Poster not found
              </div>
            )}
            <ul className="genres-list">
              {film.genres.map((el) => {
                return (
                  <li className="genre-item" key={el.id}>
                    {el.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="movie-details-right">
            <h1 className="title-name">{film.original_title}</h1>
            <p>{film.tagline}</p>
            <h1 className="title-rating">Movie rating: {film.vote_average}</h1>
            <h1 className="title-overview">Overview:</h1>
            <p className="overview">{film.overview}</p>
            <div className="cast">
              <NavLink
                className="cast-link"
                activeClassName="cast-link-active"
                to={`${url}/cast`}
              >
                Show cast
              </NavLink>
              <NavLink
                className="cast-link"
                activeClassName="cast-link-active"
                to={`${url}/reviews`}
              >
                Show reviews
              </NavLink>

              <Route path="/movies/:movieId/cast">
                <Cast film={film} />
              </Route>
              <Route path="/movies/:movieId/reviews">
                <Reviews id={film} />
              </Route>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>{film.status_message}</h1>;
  }
};

export default MovieDetailsPage;
