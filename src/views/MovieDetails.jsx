import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router";
import {
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { FetchFilmsById } from "../services/FetchApi";
import MovieDetailsInfo from "../components/MovieDetailsInfo/MovieDetailsInfo";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";
const Cast = React.lazy(() => import("../components/Cast/Cast"));
const Reviews = React.lazy(() => import("../components/Reviews/Reviews"));

export default function MovieDetails() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [filmsInfo, setFilmsInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    FetchFilmsById(movieId, setFilmsInfo);
  }, [movieId]);

  const goBack = () => {
    history.push(location?.state?.from ?? "/");
  };
  console.log(url);

  return (
    <>
      {filmsInfo && <MovieDetailsInfo value={filmsInfo} goBack={goBack} />}
      <AdditionalInfo url={url} location={location} />
      <Suspense fallback={<Loader />}>
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
}
