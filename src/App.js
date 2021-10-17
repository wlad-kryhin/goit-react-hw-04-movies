import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Registration from "./views/Registration";
import Login from "./views/Login";
import axios from "axios";

const Home = React.lazy(() => import("./views/Home.jsx"));
const Movies = React.lazy(() => import("./views/Movies.jsx"));
const MovieDetails = React.lazy(() => import("./views/MovieDetails.jsx"));

function App() {
  const [tokenHeader, setTokenHeader] = useState(null);
  const [registration, setRegistration] = useState({});
  const regData = ({ name, email, password }) => {
    return setRegistration({ name, email, password });
  };

  useEffect(() => {
    if (registration === null) return;
    console.log(registration);
    axios
      .post("https://connections-api.herokuapp.com/users/signup", registration)
      .then((response) => response.data)
      .then((data) => {
        setTokenHeader(data.token);
        axios.defaults.headers.common.Authorization = `Bearer ${tokenHeader}`;
        return data;
      })
      .catch((error) => alert("ЧТО-то пошло не так "));
  }, [registration, tokenHeader]);
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
            <Registration callback={regData} />
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
