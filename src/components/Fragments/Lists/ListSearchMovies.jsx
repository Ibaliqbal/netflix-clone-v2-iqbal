import React from "react";
import { useFetchSeacrhLists } from "../../../hooks/useFetchDatas";
import Loader from "../../Elements/Loader";
import CardMovie from "../../Elements/Card/CardMovie";

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
          <div className="w-full grid md:grid-cols-4 grid-cols-2 place-items-center items-center gap-6">
            {data?.pages.map((movie) =>
              movie.map((list) => <CardMovie movie={list} key={list.id} />)
            )}
            {!hasNextPage ? null : (
              <button
                type="button"
                onClick={() => fetchNextPage()}
                className="md:col-span-4 col-span-2 bg-secondary px-6 py-3 rounded-md"
              >
                {isFetchingNextPage ? (
                  <span className="loader-next"></span>
                ) : (
                  "Load More..."
                )}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListSearchMovies;
