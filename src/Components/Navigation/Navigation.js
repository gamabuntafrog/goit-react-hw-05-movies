import { NavLink, Route, useHistory } from "react-router-dom";

const Navigation = () => {
  const { goBack } = useHistory();

  return (
    <nav className="nav">
      <Route path="/movies/:movieId">
        <button className="nav__link nav__go-back" onClick={() => goBack()}>
          Go back
        </button>
      </Route>
      <NavLink
        className="nav__link"
        activeClassName="nav__link-active"
        exact
        to=""
      >
        Home
      </NavLink>
      <NavLink
        className="nav__link"
        activeClassName="nav__link-active"
        exact
        to="/movies"
      >
        Search
      </NavLink>
    </nav>
  );
};

export default Navigation;
