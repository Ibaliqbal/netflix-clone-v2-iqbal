import React from "react";
import { useParams } from "react-router-dom";
import {
  useFetchMovies,
  useFetchMoviesDiscover,
  useFetchMoviesTrending,
} from "../../../hooks/useFetchDatas";
import CardMovie from "../../Elements/Card/CardMovie";
import ButtonLoad from "../../Elements/ButtonLoad";

function ListMovie() {
  const { type } = useParams();
  const [
    movies,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  ] =
    type === "discover"
      ? useFetchMoviesDiscover()
      : type === "trending"
      ? useFetchMoviesTrending()
      : useFetchMovies(type);
  if (status === "pending") <p className="text-white">Loading....</p>;
  if (status === "error") <p className="text-white">Error : {error.message}</p>;
  return (
    <main className="w-full">
      <section className="container">
        <div className="w-full text-white">
          <h1 className="text-4xl font-bold mb-6">Movies</h1>
          <div className="w-full grid md:grid-cols-4 grid-cols-2 place-items-center items-center gap-6">
            {movies?.pages.map((movie) =>
              movie.map((list) => <CardMovie movie={list} key={list.id} />)
            )}
            {!hasNextPage ? null : (
              <ButtonLoad isFetchingNextPage={isFetchingNextPage} fetchNextPage={fetchNextPage} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListMovie;
