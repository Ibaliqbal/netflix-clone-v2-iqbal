import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Elements/Loader";
const Home = lazy(() => import("./pages/Home"));
const MovieLists = lazy(() => import("./pages/MovieLists"));
const TvShowsLists = lazy(() => import("./pages/TvShowsLists"));
const SearchListMovies = lazy(() => import("./pages/SearchListMovies"));
const SearchListTvShows = lazy(() => import("./pages/SearchListTvShows"));
const DetailMovie = lazy(() => import("./pages/DetailMovie"));
const DetailTv = lazy(() => import("./pages/DetailTv"));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/movies/:type"
          element={
            <Suspense fallback={<Loader />}>
              <MovieLists />
            </Suspense>
          }
        />
        <Route
          path="/tv_show/:type"
          element={
            <Suspense fallback={<Loader />}>
              <TvShowsLists />
            </Suspense>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Suspense fallback={<Loader />}>
              <DetailMovie />
            </Suspense>
          }
        />
        <Route
          path="/tv/:id"
          element={
            <Suspense fallback={<Loader />}>
              <DetailTv />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loader />}>
              <SearchListMovies />
            </Suspense>
          }
        />
        <Route
          path="/tv"
          element={
            <Suspense fallback={<Loader />}>
              <SearchListTvShows />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
