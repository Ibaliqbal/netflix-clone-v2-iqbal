import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDetailMovie } from "../hooks/useFetchDatas";
import { useEffect, useState } from "react";
import { fetchMoviesUpComing, getRandom } from "../data/api";
import { BsArrowLeftCircleFill, BsPeopleFill } from "react-icons/bs";
import Ratings from "../feature/Ratings";
import ButtonPlay from "../components/Elements/ButtonPlay";
import Loader from "../components/Elements/Loader";
import CastMovie from "../components/Elements/Cast";

function movie() {
  const { id } = useParams();
  const [moviesUp, setMoviesUp] = useState([]);
  const [movie, error, isLoasding, isError] = useFetchDetailMovie(id);
  useEffect(() => {
    const getMoviesUp = async () => {
      const pageRandom = ~~(Math.random() * 29 + 1);
      const res = await fetchMoviesUpComing(pageRandom);
      let filtered = res.filter((movie) => movie.poster_path !== null);
      filtered = getRandom(filtered, 4);
      setMoviesUp(filtered);
    };
    getMoviesUp();
  }, [id]);
  if (isLoasding) return <Loader />;
  if (isError) return `Error : ${error.message}`;
  return (
    <div className="bg-primary">
      <div
        className="w-full bg-cover h-[700px] hero relative"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BASE_URL_IMG_ORG}${
            movie?.poster_path
          })`,
        }}
      >
        <button
          onClick={() => history.back()}
          className="absolute text-white top-7 inline-flex items-center gap-2 text-xl left-8 bg-blue-600 px-3 py-1 rounded-full bg-transparent"
        >
          <BsArrowLeftCircleFill />
          Back
        </button>
      </div>
      <div className="w-full">
        <div className="container">
          <article className="w-full grid lg:grid-cols-3 place-items-center gap-5 pb-10 pt-6">
            <img
              src={`${import.meta.env.VITE_BASE_URL_IMG}${movie?.poster_path}`}
              alt="Poster"
              className="lg:-mt-[30rem] -mt-[10rem] relative"
            />
            <div className="grid gap-8 col-span-2">
              <div className="text-white leading-loose tracking-wide">
                <h1 className="font-bold lg:text-4xl">{movie?.title}</h1>
                <h3 className="font-semibold lg:text-xl">{movie?.overview}</h3>
                <p className="lg:text-lg">Release : {movie?.release_date}</p>
                <p className="lg:text-lg">
                  Duration : {movie?.runtime} minutes
                </p>
                <div className="flex md:items-center gap-3 md:text-lg">
                  <div className="flex items-center lg:gap-2">
                    <p>Rating : {movie?.vote_average}</p>
                    <Ratings movie={movie?.vote_average} />
                  </div>
                  |
                  <p className="flex items-center md:items-center md:gap-2 gap-1">
                    Popularity : {movie?.popularity} <BsPeopleFill />
                  </p>
                </div>
                <ButtonPlay series={"movie"} id={movie?.id} />
              </div>
            </div>
          </article>
          <div>
            <h1 className="text-white md:text-6xl text-center font-semibold">
              Cast
            </h1>
            <div className="w-full">
              <CastMovie id={id} type={"movie"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default movie;
