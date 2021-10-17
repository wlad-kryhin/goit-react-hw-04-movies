import "./App.css";
import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Registration from "./views/Registration";
import Login from "./views/Login";
// import Home from "./views/Home";
// import Movies from "./views/Movies";
// import MovieDetails from "./views/MovieDetails";
const Home = React.lazy(() => import("./views/Home.jsx"));
const Movies = React.lazy(() => import("./views/Movies.jsx"));
const MovieDetails = React.lazy(() => import("./views/MovieDetails.jsx"));
function App() {
  return (
    <Container>
      <Navigation />
      <Suspense
        fallback={
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
