import { useParams } from "react-router-dom";
import {
  useFetchTvShows,
  useFetchTvShowsDiscover,
  useFetchTvShowsTrending,
} from "../../../hooks/useFetchDatas";
import CardTv from "../../Elements/Card/CardTv";
function ListTvShow() {
  const { type } = useParams();
  const [shows, error, status, hasNextPage, fetchNextPage, isFetchingNextPage] =
    type === "discover"
      ? useFetchTvShowsDiscover()
      : type === "trending"
      ? useFetchTvShowsTrending()
      : useFetchTvShows(type);
  if (status === "pending") <p className="text-white">Loading....</p>;
  if (status === "error") <p className="text-white">Error : {error.message}</p>;
  return (
    <main className="w-full">
      <section className="container">
        <div className="w-full text-white">
          <h1 className="text-4xl font-bold mb-6">Tv Shows</h1>
          <div className="w-full grid md:grid-cols-4 grid-cols-2 place-items-center items-center gap-6">
            {shows?.pages.map((show) =>
              show.map((list) => <CardTv tv={list} key={list.id} />)
            )}
            {!hasNextPage ? null : (
              <button
                type="button"
                onClick={() => fetchNextPage()}
                className="md:col-span-4 col-span-2 bg-secondary px-6 py-3 rounded-md"
              >
                {isFetchingNextPage ? "Loading..." : "Load More..."}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListTvShow;
