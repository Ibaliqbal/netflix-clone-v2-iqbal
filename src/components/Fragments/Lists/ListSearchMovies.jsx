import React from "react";
import { useFetchSeacrhLists } from "../../../hooks/useFetchDatas";
import Loader from "../../Elements/Loader";
import CardMovie from "../../Elements/Card/CardMovie";
import ButtonLoad from "../../Elements/ButtonLoad";

function ListSearchMovies({ search }) {
  const query = decodeURI(search);
  const [data, status, fetchNextPage, isFetchingNextPage, hasNextPage] =
    useFetchSeacrhLists("movie", query);
  if (status === "pending") {
    return <Loader />;
  }
  if (status === "error") return `Error : ${error.message}`;
  console.log(query);
  console.log(data);
  return (
    <main className="w-full">
      <section className="container">
        <div className="w-full text-white">
          <h1 className="text-4xl font-bold mb-6">Movies</h1>
          <div className="w-full grid md:grid-cols-7 grid-cols-2 place-items-center items-center gap-6">
            {data?.pages.map((movie) =>
              movie.map((list) => <CardMovie movie={list} key={list.id} />)
            )}
            {!hasNextPage ? null : (
              <ButtonLoad fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListSearchMovies;
