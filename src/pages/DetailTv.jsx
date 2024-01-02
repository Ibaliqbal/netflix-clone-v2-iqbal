import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Ratings from "../feature/Ratings";
import { BsPeopleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { useFetchDetailTvShow } from "../hooks/useFetchDatas";
import { fetchAiringTvShows, getRandom } from "../data/api";
import transition from "../transition";
import ButtonPlay from "../components/Elements/ButtonPlay";
import Loader from "../components/Elements/Loader";

function DetailTv() {
  const { id } = useParams();
  const [AiringTodayTv, setAiringTvToday] = useState([]);
  const [show, error, isLoading, isError] = useFetchDetailTvShow(id);
  useEffect(() => {
    const getMovie = async () => {
      const randomPage = ~~(Math.random() * 11 + 1);
      let resultAiring = await fetchAiringTvShows(randomPage);
      resultAiring = getRandom(resultAiring, 4);
      setAiringTvToday(resultAiring);
    };
    getMovie();
  }, [id]);
  if (isLoading) <Loader />;
  if (isError) return `Error : ${error.message}`;
  return (
    <main className="bg-primary">
      <div
        className="w-full bg-cover h-[700px] hero relative"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BASE_URL_IMG_ORG}${
            show?.backdrop_path
          })`,
        }}
      >
        <button
          onClick={() => history.back()}
          className="absolute text-white top-7 inline-flex items-center gap-2 text-xl left-8 bg-blue-600 px-3 py-1 rounded-full bg-transparent mix-blend-difference"
        >
          <BsArrowLeftCircleFill />
          Back
        </button>
      </div>
      <div className="w-full">
        <div className="container">
          <article className="w-full grid lg:grid-cols-3 lg:place-items-center md:justify-items-start gap-5 pb-10">
            <img
              src={`${import.meta.env.VITE_BASE_URL_IMG}${show?.poster_path}`}
              alt="Poster"
              className="lg:-mt-[40rem] -mt-[10rem] relative"
            />
            <div className="grid gap-8 col-span-2 justify-items-start">
              <div className="text-white leading-loose tracking-wide">
                <h1 className="font-bold lg:text-4xl">{show?.name}</h1>
                <h3 className="font-semibold lg:text-xl">{show?.overview}</h3>
                <p className="lg:text-lg">
                  Firts Air Date : {show?.first_air_date}
                </p>
                <p className="lg:text-lg">
                  Last Air Date : {show?.last_air_date}
                </p>
                <p className="lg:text-lg">
                  Episodes : {show?.episode_run_time}
                </p>
                <div className="flex lg:items-center gap-3 lg:text-lg">
                  <div className="flex items-center md:gap-2">
                    <p>Rating : {show?.vote_average}</p>
                    <Ratings movie={show?.vote_average} />
                  </div>
                  |
                  <div className="md:flex md:items-center block md:gap-2 gap-1">
                    <p>Popularity : {show?.popularity}</p>
                    <BsPeopleFill />
                  </div>
                </div>
                <ButtonPlay series={"tv"} id={show?.id}/>
              </div>
              <div className="text-white">
                <h1>Upcoming Tv List</h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-x-2 mt-4">
                  {AiringTodayTv.map((tv) => (
                    <div key={tv.id}>
                      <Link to={`/tv/${tv.id}`}>
                        <img
                          src={`${import.meta.env.VITE_BASE_URL_IMG}${
                            tv.poster_path
                          }`}
                          alt=""
                          className="w-[150px] lg:w-[200px]"
                        />
                      </Link>
                      <h1 className="h-[60px]">{tv.name.slice(0, 10)}...</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default transition(DetailTv);
