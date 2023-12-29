import React from "react";
import { FaPlay } from "react-icons/fa";
import {setVideo} from "../"

function ButtonPlay() {
  return (
    <button className="inline-flex play-detail border-2 border-red-600 items-center bg-none text-red-600 duration-500 px-6 py-2 rounded-3xl gap-2 mt-4">
      <FaPlay /> P L A Y
    </button>
  );
}

export default ButtonPlay;
