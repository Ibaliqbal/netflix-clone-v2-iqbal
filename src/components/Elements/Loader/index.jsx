import React from "react";

function Loader() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center h-[100vh] bg-primary">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Loader;
