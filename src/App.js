import "./App.css";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
const HomePage = lazy(() => import("./View/HomePage"));
const MoviesPage = lazy(() => import("./Components/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./Components/MovieDetailsPage"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<h1>Loading.................</h1>}>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Suspense>
    </div>
  );
}

export default App;
