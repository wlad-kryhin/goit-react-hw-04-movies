import "./App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./views/Home";
import Movies from "./views/Movies";
import MovieDetails from "./views/MovieDetails";
function App() {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/movies">
          <Movies />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;