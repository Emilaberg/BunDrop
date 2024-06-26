import Sorting from "./Sorting";

function Searchbar({ onSearch, onSort, resetSearch }) {
  function handleOnSeach(e) {
    onSearch(e.target.value);
  }
  return (
    <>
      <div className="text-white flex justify-center items-center">
        <h1 className="text-4xl font-light mr-10">
          Fantastiska burgare <br /> Överallt
        </h1>

        <div className="flex overflow-hidden justify-start rounded-[34px] h-[42px]">
          <input
            type="text"
            className=" text-midnightblack w-[600px] px-2"
            onChange={handleOnSeach}
          />
          <button className="bg-orange px-8 py-2">Search</button>
        </div>
      </div>
      <div className="flex justify-center">
        <Sorting onSort={onSort} />
      </div>
    </>
  );
}

export default Searchbar;
