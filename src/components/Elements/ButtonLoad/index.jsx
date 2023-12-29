import React from 'react'

function ButtonLoad({isFetchingNextPage, fetchNextPage}) {
  return (
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
  );
}

export default ButtonLoad