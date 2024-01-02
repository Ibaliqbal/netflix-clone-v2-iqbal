import { IoMdStar, IoMdPeople } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function CardMovie({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="md:w-full">
      <motion.div
        className="relative group md:w-full"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={`${import.meta.env.VITE_BASE_URL_IMG}${movie.poster_path}`}
          alt={movie.title}
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 transition-all ease-in-out duration-300 group-hover:bg-gray-500 group-hover:opacity-75 flex justify-end pb-3 px-2 flex-col">
          <h2 className="md:text-xl text-sm font-bold group-hover:opacity-100 opacity-0 transition-opacity ease-in-out duration-300 text-white ">
            {movie.title}
          </h2>
          <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <p className="flex items-center gap-1">
              <IoMdStar className="text-yellow-400" />{" "}
              {movie.vote_average.toFixed()}
            </p>
            <p className="flex items-center gap-1">
              <IoMdPeople /> {movie.vote_count}
            </p>
          </div>
          <p className="text-white group-hover:opacity-100 opacity-0 transition-opacity ease-in-out duration-300 text-sm">
            {movie.release_date}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default CardMovie;
