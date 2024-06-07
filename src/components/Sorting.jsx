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
          currentSorting == "price_asc" ? "bg-white text-midnightblack" : ""
        }
        onClick={() => handleSort("price_asc")}
      >
        dyraste
      </button>
      <button
        className={
          currentSorting == "price_desc" ? "bg-white text-midnightblack" : ""
        }
        onClick={() => handleSort("price_desc")}
      >
        billigaste
      </button>
      <button
        className={currentSorting == "" ? "bg-white text-midnightblack" : ""}
        onClick={() => handleSort("NEW")}
      >
        Favoriterna
      </button>
      <button
        className={currentSorting == "" ? "bg-white text-midnightblack" : ""}
        onClick={() => handleSort("price")}
      >
        nyheter
      </button>
      <button
        className={currentSorting == "" ? "bg-white text-midnightblack" : ""}
        onClick={() => handleSort("price")}
      >
        a till ö
      </button>
    </div>
  );
}

export default Sorting;
