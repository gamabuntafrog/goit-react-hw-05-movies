import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import FetchTrendings from "../../Services/FetchTrendings";

const HomePage = () => {
  const [films, setFilms] = useState([]);

  const { url } = useRouteMatch();

  useEffect(() => {
    FetchTrendings.then((data) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <div className="home">
      <h1 className="home-title">Trending today</h1>
      <ul className="films-list">
        {films.map((film) => {
          return (
            <li className="film-item" key={film.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.original_title ? film.original_title : "film-poster"}
              />
              {film.original_title && (
                <Link to={`${url}movies/${film.id}`} className="film-name">
                  {film.original_title}
                </Link>
              )}
              {film.original_name && (
                <Link to={`${url}movies/${film.id}`} className="film-name">
                  {film.original_name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
