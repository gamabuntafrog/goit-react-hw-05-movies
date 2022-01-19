import { useState, useEffect } from "react";
import {
  useHistory,
  useLocation,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import FetchMovieByQuery from "../../Services/FetchMovieByQuery";

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search).get("query") ?? "";
  const { url } = useRouteMatch();

  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (params) {
      FetchMovieByQuery(params).then((data) => {
        setFilms(data.results);
        setQuery(params);
      });
    }
  }, [params]);

  const searchFilms = (e) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const submitFilm = (e) => {
    e.preventDefault();
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <div className="movies-page" style={{ minHeight: "100vh" }}>
      <h1 className="movies-title">Search</h1>
      <form className="movies-form" onSubmit={submitFilm}>
        <input className="movies-input" value={query} onChange={searchFilms} />
      </form>
      <Route path="/goit-react-hw-05-movies/movies/:a">
        <h1>films</h1>
      </Route>
      {params && (
        <ul className="films-list">
          {films.map((el) => {
            return (
              <li className="film-item" key={el.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                  alt=""
                />
                <Link className="film-name" to={`${url}/${el.id}`}>
                  {el.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
