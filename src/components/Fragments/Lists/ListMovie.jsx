import React from "react";
import { useParams } from "react-router-dom";
import {
  useFetchMovies,
  useFetchMoviesDiscover,
  useFetchMoviesTrending,
} from "../../../hooks/useFetchDatas";
import CardMovie from "../../Elements/Card/CardMovie";
import ButtonLoad from "../../Elements/ButtonLoad";

function ListMovie({movies, hasNextPage, isFetchingNextPage, fetchNextPage}) {
  return (
    <main className="w-full">
      <section className="container">
        <div className="w-full text-white">
          <h1 className="text-4xl font-bold mb-6">Movies</h1>
          <div className="w-full grid md:grid-cols-7 grid-cols-2 place-items-center items-center gap-6">
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
