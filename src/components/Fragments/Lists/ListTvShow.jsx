import CardTv from "../../Elements/Card/CardTv";
import ButtonLoad from "../../Elements/ButtonLoad";
function ListTvShow({ data, hasNextPage, isFetchingNextPage, fetchNextPage }) {
  return (
    <main className="w-full">
      <section className="container">
        <div className="w-full text-white">
          <h1 className="text-4xl font-bold mb-6">Tv Shows</h1>
          <div className="w-full grid md:grid-cols-7 grid-cols-2 place-items-center items-center gap-6">
            {data?.pages.map((show) =>
              show.map((list) => <CardTv tv={list} key={list.id} />)
            )}
            {!hasNextPage ? null : (
              <ButtonLoad
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ListTvShow;
