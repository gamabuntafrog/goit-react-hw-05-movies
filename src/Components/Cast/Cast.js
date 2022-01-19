import FetchMovieCredits from "../../Services/FetchMovieCredits";
import { useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";

const Cast = () => {
  const { params } = useRouteMatch();
  const [cast, setCast] = useState("");

  useEffect(() => {
    FetchMovieCredits(params.movieId).then((res) => {
      setCast(res.cast);
    });
  }, []);

  if (cast.length >= 1) {
    return (
      <ul className="cast-list">
        {cast.map((el) => {
          return (
            <li className="cast-item" key={el.id}>
              {el.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                  alt={el.name}
                />
              )}
              {!el.profile_path && (
                <div className="notFound">
                  <p>Not Found</p>
                </div>
              )}
              <p>
                {el.name}: {el.character}
              </p>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <h1>Not Found</h1>;
  }
};

export default Cast;
