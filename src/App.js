import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Registration from "./views/Registration";
import Login from "./views/Login";
import axios from "axios";
import createPersistedState from "use-persisted-state";
const useTokenState = createPersistedState("token");
// const Library = React.lazy(() => import("./views/Library.jsx"));
const Home = React.lazy(() => import("./views/Home.jsx"));
const Movies = React.lazy(() => import("./views/Movies.jsx"));
const MovieDetails = React.lazy(() => import("./views/MovieDetails.jsx"));

function App() {
  const [tokenHeader, setTokenHeader] = useTokenState(null);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const regData = ({ name, email, password }) => {
    axios
      .post("https://connections-api.herokuapp.com/users/signup", {
        name,
        email,
        password,
      })
      .then((response) => response.data)
      .then((data) => {
        setTokenHeader(data.token);
        setUser(data.user);
        setIsLoggedIn(true);
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
        return data;
      })
      .catch((error) => alert("ЧТО-то пошло не так "));
  };
  const loginData = ({ email, password }) => {
    axios
      .post("https://connections-api.herokuapp.com/users/login", {
        email,
        password,
      })
      .then((response) => response.data)
      .then((data) => {
        setTokenHeader(data.token);
        setUser(data.user);
        setIsLoggedIn(true);
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
        return data;
      })
      .catch((error) => alert("ЧТО-то пошло не так "));
  };
  const logoutData = () => {
    axios
      .post("https://connections-api.herokuapp.com/users/logout")
      .then((response) => response.data)
      .then((data) => {
        setIsLoggedIn(false);
        setTokenHeader(null);
        setUser({});
        axios.defaults.headers.common.Authorization = "";
        return data;
      })
      .catch((error) => alert("ЧТО-то пошло не так "));
  };
  useEffect(() => {
    if (tokenHeader === null) return;
    axios.defaults.headers.common.Authorization = `Bearer ${tokenHeader}`;
    axios
      .get("https://connections-api.herokuapp.com/users/current")
      .then((response) => response.data)
      .then((data) => {
        setIsLoggedIn(true);
        setUser(data);
        return data;
      })
      .catch((error) => alert(`${error.message} Не найдено`));
  }, []);

  return (
    <Container>
      <Navigation
        logged={isLoggedIn}
        userName={user.name}
        logout={logoutData}
      />
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
            <Login callback={loginData} />
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
