import { useState } from "react";

function Sorting({ onSort }) {
  const [currentSorting, setCurrentSorting] = useState();
  function handleSort(prop) {
    setCurrentSorting(prop);
    onSort(prop);
  }

  return (
    <div className="text-white flex gap-20 ">
      <button
        className={
          currentSorting == "price_asc"
            ? "border-solid border-2 border-orange border-opacity-100 px-3 py-1 rounded-xl text-white"
            : "border-solid border-2 border-orange border-opacity-0 px-3 py-1 rounded-xl text-white"
        }
        onClick={() => handleSort("price_asc")}
      >
        dyraste
      </button>
      <button
        className={
          currentSorting == "price_desc"
            ? "border-solid border-2 border-orange border-opacity-100 px-3 py-1 rounded-xl text-white"
            : "border-solid border-2 border-orange border-opacity-0 px-3 py-1 rounded-xl text-white"
        }
        onClick={() => handleSort("price_desc")}
      >
        billigaste
      </button>
      <button
        className={
          currentSorting == "alphabetic"
            ? "border-solid border-2 border-orange border-opacity-100 px-3 py-1 rounded-xl text-white"
            : "border-solid border-2 border-orange border-opacity-0 px-3 py-1 rounded-xl text-white"
        }
        onClick={() => handleSort("alphabetic")}
      >
        a till ö
      </button>
      <button
        className={
          currentSorting == ""
            ? "border-solid border-2 border-orange border-opacity-100 px-3 py-1 rounded-xl text-white"
            : "border-solid border-2 border-orange border-opacity-0 px-3 py-1 rounded-xl text-white"
        }
        onClick={() => handleSort("NEW")}
      >
        Favoriterna
      </button>
      <button
        className={
          currentSorting == ""
            ? "border-solid border-2 border-orange border-opacity-100 px-3 py-1 rounded-xl text-white"
            : "border-solid border-2 border-orange border-opacity-0 px-3 py-1 rounded-xl text-white"
        }
        onClick={() => handleSort("price")}
      >
        nyheter
      </button>
    </div>
  );
}

export default Sorting;
