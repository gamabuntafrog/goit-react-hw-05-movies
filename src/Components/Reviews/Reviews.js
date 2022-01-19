import FetchMovieReviews from "../../Services/FetchMovieReviews";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

const Reviews = () => {
  const { params } = useRouteMatch();
  const [reviews, setReviwes] = useState("");

  useEffect(() => {
    FetchMovieReviews(params.movieId).then((data) => {
      setReviwes(data.results);
    });
  }, []);

  console.log(reviews);
  if (reviews.length >= 1) {
    return (
      <ul className="reviews-list">
        {reviews.map((el, i) => {
          return (
            <li className="review-item" key={i}>
              <h2>{el.author}:</h2>
              <p>{el.content}</p>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <h1>Not Found</h1>;
  }
};

export default Reviews;
